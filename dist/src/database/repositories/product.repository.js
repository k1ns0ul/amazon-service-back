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
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProductRepository = class ProductRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async upsertWithSnapshot(product, reviews, jobId, categoryId) {
        const saved = await this.prisma.product.upsert({
            where: { asin: product.asin },
            create: {
                asin: product.asin,
                title: product.title,
                sellerId: product.sellerId ?? null,
                categoryId,
            },
            update: {
                title: product.title,
                updatedAt: new Date(),
            },
        });
        await this.prisma.productSnapshot.create({
            data: {
                productId: saved.id,
                parseJobId: jobId,
                price: product.price ? this.parsePrice(product.price) : null,
                rating: product.rating,
                reviewCount: product.reviewCount,
                parseStatus: 'OK',
            },
        });
        if (reviews.length) {
            await this.prisma.review.createMany({
                data: reviews
                    .filter((r) => r.date)
                    .map((r) => ({
                    productId: saved.id,
                    title: r.title,
                    rating: r.rating,
                    rawDateText: r.date,
                    reviewDate: this.parseReviewDate(r.date),
                })),
                skipDuplicates: true,
            });
        }
        return saved;
    }
    async upsertFailedSnapshot(asin, jobId, parseStatus) {
        const product = await this.prisma.product.upsert({
            where: { asin },
            create: { asin, title: asin },
            update: {},
        });
        await this.prisma.productSnapshot.create({
            data: {
                productId: product.id,
                parseJobId: jobId,
                parseStatus,
            },
        });
    }
    parsePrice(raw) {
        const cleaned = raw.replace(/[^0-9.]/g, '');
        const num = parseFloat(cleaned);
        return isNaN(num) ? null : num;
    }
    parseReviewDate(raw) {
        try {
            const match = raw.match(/on (.+)$/);
            const dateStr = match ? match[1] : raw;
            const d = new Date(dateStr);
            return isNaN(d.getTime()) ? null : d;
        }
        catch {
            return null;
        }
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductRepository);
//# sourceMappingURL=product.repository.js.map