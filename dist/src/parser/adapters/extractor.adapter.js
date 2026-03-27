"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var ExtractorAdapter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractorAdapter = void 0;
const common_1 = require("@nestjs/common");
const cheerio = __importStar(require("cheerio"));
const ASIN_BLACKLIST = new Set(['B0CHTVMXZJ', 'B07984JN3L']);
let ExtractorAdapter = ExtractorAdapter_1 = class ExtractorAdapter {
    logger = new common_1.Logger(ExtractorAdapter_1.name);
    hasCaptcha(html) {
        return (html.includes('validateCaptcha') ||
            html.includes('Robot Check') ||
            html.includes('Type the characters you see'));
    }
    extractAsinsFromListing(html) {
        const $ = cheerio.load(html);
        const seen = new Map();
        $('a[href*="/dp/"]').each((_, el) => {
            const href = $(el).attr('href') ?? '';
            const match = href.match(/\/dp\/([A-Z0-9]{10})/);
            if (!match)
                return;
            const asin = match[1];
            const isNavLink = href.includes('ref_=nav_') ||
                href.includes('ref_=footer_') ||
                href.includes('ref_=gateway_') ||
                href.includes('ref_=pd_sl_');
            if (isNavLink || ASIN_BLACKLIST.has(asin))
                return;
            if (!seen.has(asin)) {
                const sellerMatch = href.match(/seller=([A-Z0-9]+)/);
                seen.set(asin, sellerMatch ? sellerMatch[1] : null);
            }
        });
        return Array.from(seen.entries()).map(([asin, sellerId]) => ({ asin, sellerId }));
    }
    extractProductDetails(html, asin) {
        try {
            const $ = cheerio.load(html);
            const title = $('#productTitle').text().trim();
            const ratingText = $('#acrPopover').attr('title') ?? '';
            const ratingMatch = ratingText.match(/[\d.]+/);
            const reviewLabel = $('#acrCustomerReviewText').first().attr('aria-label') ?? '';
            const reviewMatch = reviewLabel.match(/[\d,]+/);
            const price = $('.a-price .a-offscreen').first().text().trim() || null;
            const sellerLink = $('a#sellerProfileTriggerId').attr('href') ?? '';
            const sellerMatch = sellerLink.match(/seller=([A-Z0-9]+)/);
            if (!title) {
                this.logger.warn(`Empty title for ${asin}`);
                return null;
            }
            return {
                asin,
                title,
                sellerId: sellerMatch ? sellerMatch[1] : null,
                rating: ratingMatch ? parseFloat(ratingMatch[0]) : null,
                reviewCount: reviewMatch ? parseInt(reviewMatch[0].replace(/,/g, '')) : null,
                price,
            };
        }
        catch (e) {
            this.logger.error(`extractProductDetails ${asin}: ${e.message}`);
            return null;
        }
    }
    extractReviews(html) {
        try {
            const $ = cheerio.load(html);
            const reviews = [];
            const els = $('[data-hook="review"]').length ? $('[data-hook="review"]') : $('.review');
            els.each((_, el) => {
                const ratingText = $(el)
                    .find('[data-hook="review-star-rating"] .a-icon-alt, .review-rating .a-icon-alt')
                    .first()
                    .text();
                const ratingMatch = ratingText.match(/[\d.]+/);
                const title = $(el)
                    .find('a.review-title, [data-hook="review-title"]')
                    .find('span:not(.a-icon-alt)')
                    .last()
                    .text()
                    .trim() || null;
                const date = $(el)
                    .find('[data-hook="review-date"], .review-date')
                    .first()
                    .text()
                    .trim() || null;
                if (!date)
                    return;
                reviews.push({
                    title,
                    rating: ratingMatch ? parseFloat(ratingMatch[0]) : null,
                    date,
                });
            });
            return reviews;
        }
        catch (e) {
            this.logger.error(`extractReviews: ${e.message}`);
            return [];
        }
    }
};
exports.ExtractorAdapter = ExtractorAdapter;
exports.ExtractorAdapter = ExtractorAdapter = ExtractorAdapter_1 = __decorate([
    (0, common_1.Injectable)()
], ExtractorAdapter);
//# sourceMappingURL=extractor.adapter.js.map