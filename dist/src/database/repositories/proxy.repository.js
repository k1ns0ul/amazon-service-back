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
exports.ProxyRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProxyRepository = class ProxyRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllActive() {
        return this.prisma.proxyEntry.findMany({
            where: { isActive: true },
        });
    }
    async markSuccess(proxyId) {
        return this.prisma.proxyEntry.update({
            where: { id: proxyId },
            data: {
                failureCount: 0,
                successCount: { increment: 1 },
                lastStatus: 'OK',
            },
        });
    }
    async markFailure(proxyId) {
        return this.prisma.proxyEntry.update({
            where: { id: proxyId },
            data: { failureCount: { increment: 1 } },
        });
    }
    async disable(proxyId, untilMs) {
        return this.prisma.proxyEntry.update({
            where: { id: proxyId },
            data: {
                disabledUntil: new Date(Date.now() + untilMs),
                lastStatus: 'BANNED',
            },
        });
    }
    async updateHealthCheck(proxyId, status) {
        return this.prisma.proxyEntry.update({
            where: { id: proxyId },
            data: { lastCheckedAt: new Date(), lastStatus: status },
        });
    }
};
exports.ProxyRepository = ProxyRepository;
exports.ProxyRepository = ProxyRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProxyRepository);
//# sourceMappingURL=proxy.repository.js.map