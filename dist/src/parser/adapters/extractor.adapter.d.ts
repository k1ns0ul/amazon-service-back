import { ListingProduct, ReviewData } from '../domain/types';
export declare class ExtractorAdapter {
    private readonly logger;
    hasCaptcha(html: string): boolean;
    extractAsinsFromListing(html: string): {
        asin: string;
        sellerId: string | null;
    }[];
    extractProductDetails(html: string, asin: string): ListingProduct | null;
    extractReviews(html: string): ReviewData[];
}
