import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { ListingProduct, ReviewData } from '../../parser/domain/types'

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async upsertWithSnapshot(
    product: ListingProduct,
    reviews: ReviewData[],
    jobId: string,
    categoryId: string,
  ) {
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
    })

    await this.prisma.productSnapshot.create({
      data: {
        productId: saved.id,
        parseJobId: jobId,
        price: product.price ? this.parsePrice(product.price) : null,
        rating: product.rating,
        reviewCount: product.reviewCount,
        parseStatus: 'OK',
      },
    })

    if (reviews.length) {
      await this.prisma.review.createMany({
        data: reviews
          .filter((r) => r.date)
          .map((r) => ({
            productId: saved.id,
            title: r.title,
            rating: r.rating,
            rawDateText: r.date,
            reviewDate: this.parseReviewDate(r.date!),
          })),
        skipDuplicates: true,
      })
    }

    return saved
  }

  async upsertFailedSnapshot(asin: string, jobId: string, parseStatus: 'CAPTCHA' | 'PARSE_ERROR' | 'NETWORK_ERROR') {
    const product = await this.prisma.product.upsert({
      where: { asin },
      create: { asin, title: asin },
      update: {},
    })

    await this.prisma.productSnapshot.create({
      data: {
        productId: product.id,
        parseJobId: jobId,
        parseStatus,
      },
    })
  }

  private parsePrice(raw: string): number | null {
    const cleaned = raw.replace(/[^0-9.]/g, '')
    const num = parseFloat(cleaned)
    return isNaN(num) ? null : num
  }

  private parseReviewDate(raw: string): Date | null {
    try {
      const match = raw.match(/on (.+)$/)
      const dateStr = match ? match[1] : raw
      const d = new Date(dateStr)
      return isNaN(d.getTime()) ? null : d
    } catch {
      return null
    }
  }
}