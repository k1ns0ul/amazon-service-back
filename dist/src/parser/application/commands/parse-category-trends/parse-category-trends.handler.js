"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ParseCategoryTrendsHandler_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseCategoryTrendsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const parse_category_trends_command_1 = require("./parse-category-trends.command");
const parse_job_repository_1 = require("../../../../database/repositories/parse-job.repository");
const product_repository_1 = require("../../../../database/repositories/product.repository");
const http_adapter_1 = require("../../../adapters/http.adapter");
const extractor_adapter_1 = require("../../../adapters/extractor.adapter");
const product_parsed_event_1 = require("../../events/product-parsed.event");
const errors_1 = require("../../../domain/errors");
const parser_config_1 = require("../../../config/parser.config");
let ParseCategoryTrendsHandler = ParseCategoryTrendsHandler_1 = class ParseCategoryTrendsHandler {
    parseJobRepo;
    productRepo;
    http;
    extractor;
    eventBus;
    logger = new common_1.Logger(ParseCategoryTrendsHandler_1.name);
    constructor(parseJobRepo, productRepo, http, extractor, eventBus) {
        this.parseJobRepo = parseJobRepo;
        this.productRepo = productRepo;
        this.http = http;
        this.extractor = extractor;
        this.eventBus = eventBus;
    }
    async execute(command) {
        const { userId, nodeId, limit } = command;
        const job = await this.parseJobRepo.create({ userId, nodeId, type: 'CATEGORY_TRENDS' });
        await this.parseJobRepo.markRunning(job.id);
        this.runParsing(job.id, job.categoryId, nodeId, limit).catch((err) => {
            this.logger.error(`Background parse failed job=${job.id}: ${err.message}`);
        });
        return job.id;
    }
    async runParsing(jobId, categoryId, nodeId, limit) {
        const t0 = Date.now();
        try {
            const categoryResult = await this.http.fetchWithRetry(`/gp/browse.html?node=${nodeId}`);
            if (!categoryResult.ok) {
                throw new errors_1.FetchFailedError(`/gp/browse.html?node=${nodeId}`, categoryResult.reason);
            }
            if (this.extractor.hasCaptcha(categoryResult.html)) {
                throw new errors_1.CaptchaError(`/gp/browse.html?node=${nodeId}`);
            }
            const allItems = this.extractor.extractAsinsFromListing(categoryResult.html);
            if (!allItems.length) {
                throw new errors_1.NoAsinsError(nodeId);
            }
            const items = allItems.slice(0, limit);
            const results = await this.runWithConcurrency(items.map((i) => i.asin), (asin) => this.fetchAndSave(asin, jobId, categoryId), parser_config_1.PARSER_CONFIG.concurrency);
            const ok = results.filter((r) => r === 'ok').length;
            const failed = results.filter((r) => r !== 'ok').length;
            await this.parseJobRepo.markDone(jobId, {
                productsFound: allItems.length,
                productsOk: ok,
                productsFailed: failed,
                durationMs: Date.now() - t0,
            });
        }
        catch (err) {
            await this.parseJobRepo.markFailed(jobId, err.message);
        }
    }
    async fetchAndSave(asin, jobId, categoryId) {
        const productResult = await this.http.fetchWithRetry(`/dp/${asin}`);
        if (!productResult.ok || this.extractor.hasCaptcha(productResult.html)) {
            await this.productRepo.upsertFailedSnapshot(asin, jobId, 'CAPTCHA');
            return 'captcha';
        }
        const product = this.extractor.extractProductDetails(productResult.html, asin);
        if (!product) {
            await this.productRepo.upsertFailedSnapshot(asin, jobId, 'PARSE_ERROR');
            return 'parse_error';
        }
        await new Promise((r) => setTimeout(r, parser_config_1.PARSER_CONFIG.intraProductDelayMs));
        const reviewsResult = await this.http.fetchWithRetry(`/product-reviews/${asin}`);
        const reviews = reviewsResult.ok && !this.extractor.hasCaptcha(reviewsResult.html)
            ? this.extractor.extractReviews(reviewsResult.html)
            : [];
        await this.productRepo.upsertWithSnapshot(product, reviews, jobId, categoryId);
        this.eventBus.publish(new product_parsed_event_1.ProductParsedEvent(asin, jobId));
        return 'ok';
    }
    async runWithConcurrency(items, task, limit) {
        const results = new Array(items.length);
        let index = 0;
        const worker = async () => {
            while (index < items.length) {
                const i = index++;
                results[i] = await task(items[i]);
            }
        };
        await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
        return results;
    }
};
exports.ParseCategoryTrendsHandler = ParseCategoryTrendsHandler;
exports.ParseCategoryTrendsHandler = ParseCategoryTrendsHandler = ParseCategoryTrendsHandler_1 = __decorate([
    (0, cqrs_1.CommandHandler)(parse_category_trends_command_1.ParseCategoryTrendsCommand),
    __metadata("design:paramtypes", [parse_job_repository_1.ParseJobRepository,
        product_repository_1.ProductRepository,
        http_adapter_1.HttpAdapter,
        extractor_adapter_1.ExtractorAdapter,
        cqrs_1.EventBus])
], ParseCategoryTrendsHandler);
//# sourceMappingURL=parse-category-trends.handler.js.map