import { PrismaService } from '../prisma.service';
import { ListingProduct, ReviewData } from '../../parser/domain/types';
export declare class ProductRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    upsertWithSnapshot(product: ListingProduct, reviews: ReviewData[], jobId: string, categoryId: string): Promise<{
        id: string;
        createdAt: Date;
        categoryId: string | null;
        asin: string;
        title: string;
        sellerId: string | null;
        updatedAt: Date;
    }>;
    upsertFailedSnapshot(asin: string, jobId: string, parseStatus: 'CAPTCHA' | 'PARSE_ERROR' | 'NETWORK_ERROR'): Promise<void>;
    private parsePrice;
    private parseReviewDate;
}
