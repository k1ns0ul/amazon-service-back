import { IQueryHandler } from '@nestjs/cqrs';
import { GetCategoryTrendsQuery } from './get-category-trends.query';
import { ParseJobRepository } from '../../../../database/repositories/parse-job.repository';
export declare class GetCategoryTrendsHandler implements IQueryHandler<GetCategoryTrendsQuery> {
    private readonly parseJobRepo;
    constructor(parseJobRepo: ParseJobRepository);
    execute(query: GetCategoryTrendsQuery): Promise<({
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
            parseStatus: import("../../../../generated/prisma/enums").ParseStatus;
            productId: string;
            parseJobId: string;
        })[];
    } & {
        id: string;
        type: import("../../../../generated/prisma/enums").ParseJobType;
        status: import("../../../../generated/prisma/enums").ParseJobStatus;
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
