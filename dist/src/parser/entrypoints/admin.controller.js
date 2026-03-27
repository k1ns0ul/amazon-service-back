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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const proxy_adapter_1 = require("../adapters/proxy.adapter");
const http_adapter_1 = require("../adapters/http.adapter");
const session_adapter_1 = require("../adapters/session.adapter");
let AdminController = class AdminController {
    prisma;
    proxy;
    http;
    session;
    constructor(prisma, proxy, http, session) {
        this.prisma = prisma;
        this.proxy = proxy;
        this.http = http;
        this.session = session;
    }
    async getStats() {
        const [totalUsers, totalJobs, totalProducts, totalSnapshots, jobsByStatus, jobsByType] = await Promise.all([
            this.prisma.user.count(),
            this.prisma.parseJob.count(),
            this.prisma.product.count(),
            this.prisma.productSnapshot.count(),
            this.prisma.parseJob.groupBy({ by: ['status'], _count: { id: true } }),
            this.prisma.parseJob.groupBy({ by: ['type'], _count: { id: true } }),
        ]);
        return {
            ok: true,
            totalUsers,
            totalJobs,
            totalProducts,
            totalSnapshots,
            jobsByStatus: Object.fromEntries(jobsByStatus.map((r) => [r.status, r._count.id])),
            jobsByType: Object.fromEntries(jobsByType.map((r) => [r.type, r._count.id])),
        };
    }
    async proxyHealth() {
        const proxies = await this.prisma.proxyEntry.findMany();
        const results = await Promise.all(proxies.map(async (p) => {
            const [amazonReachable, externalReachable] = await Promise.allSettled([
                this.http.ping('https://www.amazon.com', p.url),
                this.http.ping('https://httpbin.org/ip', p.url),
            ]);
            const amazonOk = amazonReachable.status === 'fulfilled' && amazonReachable.value;
            const externalOk = externalReachable.status === 'fulfilled' && externalReachable.value;
            const status = amazonOk && externalOk ? 'OK' : !amazonOk ? 'BANNED' : 'DEAD';
            await this.prisma.proxyEntry.update({
                where: { id: p.id },
                data: { lastCheckedAt: new Date(), lastStatus: status },
            });
            return {
                url: p.url,
                status,
                failureCount: p.failureCount,
                successCount: p.successCount,
                disabledUntil: p.disabledUntil,
                lastCheckedAt: new Date(),
                amazonReachable: amazonOk,
                externalReachable: externalOk,
            };
        }));
        return { ok: true, proxies: results };
    }
    async cookieStatus() {
        const sessions = await this.prisma.cookieSession.findMany({
            orderBy: { capturedAt: 'desc' },
        });
        return {
            ok: true,
            sessions: sessions.map((s) => ({
                id: s.id,
                isValid: s.isValid,
                capturedAt: s.capturedAt,
                expiresAt: s.expiresAt,
                lastUsedAt: s.lastUsedAt,
                isExpired: s.expiresAt < new Date(),
            })),
        };
    }
    async cookieRefresh() {
        await this.session.forceRefresh();
        return { ok: true, message: 'Cookie refresh triggered' };
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('stats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('proxy-health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "proxyHealth", null);
__decorate([
    (0, common_1.Get)('cookie-status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "cookieStatus", null);
__decorate([
    (0, common_1.Post)('cookie-refresh'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "cookieRefresh", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        proxy_adapter_1.ProxyAdapter,
        http_adapter_1.HttpAdapter,
        session_adapter_1.SessionAdapter])
], AdminController);
//# sourceMappingURL=admin.controller.js.map