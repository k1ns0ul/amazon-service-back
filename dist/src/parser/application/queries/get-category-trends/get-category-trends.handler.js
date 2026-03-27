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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoryTrendsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const get_category_trends_query_1 = require("./get-category-trends.query");
const parse_job_repository_1 = require("../../../../database/repositories/parse-job.repository");
let GetCategoryTrendsHandler = class GetCategoryTrendsHandler {
    parseJobRepo;
    constructor(parseJobRepo) {
        this.parseJobRepo = parseJobRepo;
    }
    async execute(query) {
        return this.parseJobRepo.findByIdWithProducts(query.jobId, query.userId);
    }
};
exports.GetCategoryTrendsHandler = GetCategoryTrendsHandler;
exports.GetCategoryTrendsHandler = GetCategoryTrendsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_category_trends_query_1.GetCategoryTrendsQuery),
    __metadata("design:paramtypes", [parse_job_repository_1.ParseJobRepository])
], GetCategoryTrendsHandler);
//# sourceMappingURL=get-category-trends.handler.js.map