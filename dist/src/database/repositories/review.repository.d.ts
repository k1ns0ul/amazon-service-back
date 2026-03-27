import { PrismaService } from '../prisma.service';
export declare class ReviewRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByProduct(productId: string): Promise<{
        id: string;
        capturedAt: Date;
        title: string | null;
        rating: import("@prisma/client-runtime-utils").Decimal | null;
        productId: string;
        externalId: string | null;
        reviewDate: Date | null;
        rawDateText: string | null;
    }[]>;
}
