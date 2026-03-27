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
var SessionAdapter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionAdapter = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const puppeteer_adapter_1 = require("./puppeteer.adapter");
const parser_config_1 = require("../config/parser.config");
let SessionAdapter = SessionAdapter_1 = class SessionAdapter {
    prisma;
    puppeteer;
    logger = new common_1.Logger(SessionAdapter_1.name);
    refreshPromise = null;
    constructor(prisma, puppeteer) {
        this.prisma = prisma;
        this.puppeteer = puppeteer;
    }
    async onModuleInit() {
        await this.refresh();
    }
    async getCookieHeader() {
        const session = await this.prisma.cookieSession.findFirst({
            where: {
                isValid: true,
                expiresAt: { gt: new Date() },
            },
            orderBy: { capturedAt: 'desc' },
        });
        if (session) {
            await this.prisma.cookieSession.update({
                where: { id: session.id },
                data: { lastUsedAt: new Date() },
            });
            return session.cookieHeader;
        }
        if (!this.refreshPromise) {
            this.refreshPromise = this.refresh().finally(() => {
                this.refreshPromise = null;
            });
        }
        await this.refreshPromise;
        const fresh = await this.prisma.cookieSession.findFirst({
            where: { isValid: true },
            orderBy: { capturedAt: 'desc' },
        });
        return fresh?.cookieHeader ?? '';
    }
    async forceRefresh() {
        if (!this.refreshPromise) {
            this.refreshPromise = this.refresh().finally(() => {
                this.refreshPromise = null;
            });
        }
        await this.refreshPromise;
    }
    async refresh() {
        try {
            this.logger.log('Refreshing cookie session...');
            const cookieHeader = await this.puppeteer.login();
            if (!cookieHeader) {
                this.logger.warn('Login returned empty cookie');
                return;
            }
            await this.prisma.cookieSession.updateMany({
                where: { isValid: true },
                data: { isValid: false },
            });
            await this.prisma.cookieSession.create({
                data: {
                    cookieHeader,
                    isValid: true,
                    capturedAt: new Date(),
                    expiresAt: new Date(Date.now() + parser_config_1.PARSER_CONFIG.session.ttlMs),
                },
            });
            this.logger.log('Cookie session saved to DB');
        }
        catch (e) {
            this.logger.error(`Session refresh failed: ${e.message}`);
        }
    }
};
exports.SessionAdapter = SessionAdapter;
exports.SessionAdapter = SessionAdapter = SessionAdapter_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        puppeteer_adapter_1.PuppeteerAdapter])
], SessionAdapter);
//# sourceMappingURL=session.adapter.js.map