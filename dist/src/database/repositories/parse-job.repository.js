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
exports.ParseJobRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ParseJobRepository = class ParseJobRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const category = await this.prisma.category.upsert({
            where: { nodeId: data.nodeId },
            create: { nodeId: data.nodeId },
            update: {},
        });
        return this.prisma.parseJob.create({
            data: {
                userId: data.userId,
                categoryId: category.id,
                type: data.type,
                status: 'PENDING',
                sellerProfileId: data.sellerProfileId ?? null,
            },
        });
    }
    async markRunning(jobId) {
        return this.prisma.parseJob.update({
            where: { id: jobId },
            data: { status: 'RUNNING', startedAt: new Date() },
        });
    }
    async markDone(jobId, stats) {
        return this.prisma.parseJob.update({
            where: { id: jobId },
            data: { status: 'DONE', finishedAt: new Date(), ...stats },
        });
    }
    async markFailed(jobId, errorMessage) {
        return this.prisma.parseJob.update({
            where: { id: jobId },
            data: { status: 'FAILED', finishedAt: new Date(), errorMessage },
        });
    }
    async findByIdWithProducts(jobId, userId) {
        return this.prisma.parseJob.findFirst({
            where: { id: jobId, userId },
            include: {
                snapshots: {
                    include: { product: true },
                    orderBy: { capturedAt: 'desc' },
                },
                category: true,
            },
        });
    }
    async findById(jobId) {
        return this.prisma.parseJob.findUnique({
            where: { id: jobId },
            include: { category: true },
        });
    }
};
exports.ParseJobRepository = ParseJobRepository;
exports.ParseJobRepository = ParseJobRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ParseJobRepository);
//# sourceMappingURL=parse-job.repository.js.map