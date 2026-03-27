import { PrismaService } from '../prisma.service';
interface CreateJobData {
    userId: string;
    nodeId: string;
    type: 'OWN_PRODUCTS' | 'COMPETITORS' | 'CATEGORY_TRENDS';
    sellerProfileId?: string;
}
interface DoneStats {
    productsFound: number;
    productsOk: number;
    productsFailed: number;
    durationMs: number;
}
export declare class ParseJobRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateJobData): Promise<{
        id: string;
        type: import("../../generated/prisma/enums").ParseJobType;
        status: import("../../generated/prisma/enums").ParseJobStatus;
        productsFound: number;
        productsOk: number;
        productsFailed: number;
        requestedAt: Date;
        startedAt: Date | null;
        finishedAt: Date | null;
        durationMs: number | null;
        errorMessage: string | null;
        userId: string;
        categoryId: string;
        sellerProfileId: string | null;
    }>;
    markRunning(jobId: string): Promise<{
        id: string;
        type: import("../../generated/prisma/enums").ParseJobType;
        status: import("../../generated/prisma/enums").ParseJobStatus;
        productsFound: number;
        productsOk: number;
        productsFailed: number;
        requestedAt: Date;
        startedAt: Date | null;
        finishedAt: Date | null;
        durationMs: number | null;
        errorMessage: string | null;
        userId: string;
        categoryId: string;
        sellerProfileId: string | null;
    }>;
    markDone(jobId: string, stats: DoneStats): Promise<{
        id: string;
        type: import("../../generated/prisma/enums").ParseJobType;
        status: import("../../generated/prisma/enums").ParseJobStatus;
        productsFound: number;
        productsOk: number;
        productsFailed: number;
        requestedAt: Date;
        startedAt: Date | null;
        finishedAt: Date | null;
        durationMs: number | null;
        errorMessage: string | null;
        userId: string;
        categoryId: string;
        sellerProfileId: string | null;
    }>;
    markFailed(jobId: string, errorMessage: string): Promise<{
        id: string;
        type: import("../../generated/prisma/enums").ParseJobType;
        status: import("../../generated/prisma/enums").ParseJobStatus;
        productsFound: number;
        productsOk: number;
        productsFailed: number;
        requestedAt: Date;
        startedAt: Date | null;
        finishedAt: Date | null;
        durationMs: number | null;
        errorMessage: string | null;
        userId: string;
        categoryId: string;
        sellerProfileId: string | null;
    }>;
    findByIdWithProducts(jobId: string, userId: string): Promise<({
        category: {
            id: string;
            createdAt: Date;
            name: string | null;
            nodeId: string;
            lastParsedAt: Date | null;
        };
        snapshots: ({
            product: {
                id: string;
                createdAt: Date;
                categoryId: string | null;
                asin: string;
                title: string;
                sellerId: string | null;
                updatedAt: Date;
            };
        } & {
            id: string;
            capturedAt: Date;
            price: import("@prisma/client-runtime-utils").Decimal | null;
            currency: string;
            rating: import("@prisma/client-runtime-utils").Decimal | null;
            reviewCount: number | null;
            parseStatus: import("../../generated/prisma/enums").ParseStatus;
            productId: string;
            parseJobId: string;
        })[];
    } & {
        id: string;
        type: import("../../generated/prisma/enums").ParseJobType;
        status: import("../../generated/prisma/enums").ParseJobStatus;
        productsFound: number;
        productsOk: number;
        productsFailed: number;
        requestedAt: Date;
        startedAt: Date | null;
        finishedAt: Date | null;
        durationMs: number | null;
        errorMessage: string | null;
        userId: string;
        categoryId: string;
        sellerProfileId: string | null;
    }) | null>;
    findById(jobId: string): Promise<({
        category: {
            id: string;
            createdAt: Date;
            name: string | null;
            nodeId: string;
            lastParsedAt: Date | null;
        };
    } & {
        id: string;
        type: import("../../generated/prisma/enums").ParseJobType;
        status: import("../../generated/prisma/enums").ParseJobStatus;
        productsFound: number;
        productsOk: number;
        productsFailed: number;
        requestedAt: Date;
        startedAt: Date | null;
        finishedAt: Date | null;
        durationMs: number | null;
        errorMessage: string | null;
        userId: string;
        categoryId: string;
        sellerProfileId: string | null;
    }) | null>;
}
export {};
