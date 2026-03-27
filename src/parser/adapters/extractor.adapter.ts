import { Injectable, Logger } from '@nestjs/common'
import * as cheerio from 'cheerio'
import { ListingProduct, ReviewData } from '../domain/types'

const ASIN_BLACKLIST = new Set(['B0CHTVMXZJ', 'B07984JN3L'])

@Injectable()
export class ExtractorAdapter {
  private readonly logger = new Logger(ExtractorAdapter.name)

  hasCaptcha(html: string): boolean {
    return (
      html.includes('validateCaptcha') ||
      html.includes('Robot Check') ||
      html.includes('Type the characters you see')
    )
  }

  extractAsinsFromListing(html: string): { asin: string; sellerId: string | null }[] {
    const $ = cheerio.load(html)
    const seen = new Map<string, string | null>()

    $('a[href*="/dp/"]').each((_, el) => {
      const href = $(el).attr('href') ?? ''
      const match = href.match(/\/dp\/([A-Z0-9]{10})/)
      if (!match) return

      const asin = match[1]

      const isNavLink =
        href.includes('ref_=nav_') ||
        href.includes('ref_=footer_') ||
        href.includes('ref_=gateway_') ||
        href.includes('ref_=pd_sl_')

      if (isNavLink || ASIN_BLACKLIST.has(asin)) return

      if (!seen.has(asin)) {
        const sellerMatch = href.match(/seller=([A-Z0-9]+)/)
        seen.set(asin, sellerMatch ? sellerMatch[1] : null)
      }
    })

    return Array.from(seen.entries()).map(([asin, sellerId]) => ({ asin, sellerId }))
  }

  extractProductDetails(html: string, asin: string): ListingProduct | null {
    try {
      const $ = cheerio.load(html)

      const title = $('#productTitle').text().trim()
      const ratingText = $('#acrPopover').attr('title') ?? ''
      const ratingMatch = ratingText.match(/[\d.]+/)
      const reviewLabel = $('#acrCustomerReviewText').first().attr('aria-label') ?? ''
      const reviewMatch = reviewLabel.match(/[\d,]+/)
      const price = $('.a-price .a-offscreen').first().text().trim() || null

      const sellerLink = $('a#sellerProfileTriggerId').attr('href') ?? ''
      const sellerMatch = sellerLink.match(/seller=([A-Z0-9]+)/)

      if (!title) {
        this.logger.warn(`Empty title for ${asin}`)
        return null
      }

      return {
        asin,
        title,
        sellerId: sellerMatch ? sellerMatch[1] : null,
        rating: ratingMatch ? parseFloat(ratingMatch[0]) : null,
        reviewCount: reviewMatch ? parseInt(reviewMatch[0].replace(/,/g, '')) : null,
        price,
      }
    } catch (e) {
      this.logger.error(`extractProductDetails ${asin}: ${e.message}`)
      return null
    }
  }

  extractReviews(html: string): ReviewData[] {
    try {
      const $ = cheerio.load(html)
      const reviews: ReviewData[] = []

      const els = $('[data-hook="review"]').length ? $('[data-hook="review"]') : $('.review')

      els.each((_, el) => {
        const ratingText = $(el)
          .find('[data-hook="review-star-rating"] .a-icon-alt, .review-rating .a-icon-alt')
          .first()
          .text()
        const ratingMatch = ratingText.match(/[\d.]+/)
        const title =
          $(el)
            .find('a.review-title, [data-hook="review-title"]')
            .find('span:not(.a-icon-alt)')
            .last()
            .text()
            .trim() || null
        const date =
          $(el)
            .find('[data-hook="review-date"], .review-date')
            .first()
            .text()
            .trim() || null

        if (!date) return

        reviews.push({
          title,
          rating: ratingMatch ? parseFloat(ratingMatch[0]) : null,
          date,
        })
      })

      return reviews
    } catch (e) {
      this.logger.error(`extractReviews: ${e.message}`)
      return []
    }
  }
}