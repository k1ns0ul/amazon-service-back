import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs'
import { Logger } from '@nestjs/common'
import { ParseCategoryTrendsCommand } from './parse-category-trends.command'
import { ParseJobRepository } from '../../../../database/repositories/parse-job.repository'
import { ProductRepository } from '../../../../database/repositories/product.repository'
import { HttpAdapter } from '../../../adapters/http.adapter'
import { ExtractorAdapter } from '../../../adapters/extractor.adapter'
import { ProductParsedEvent } from '../../events/product-parsed.event'
import { CaptchaError, FetchFailedError, NoAsinsError } from '../../../domain/errors'
import { PARSER_CONFIG } from '../../../config/parser.config'

@CommandHandler(ParseCategoryTrendsCommand)
export class ParseCategoryTrendsHandler implements ICommandHandler<ParseCategoryTrendsCommand> {
  private readonly logger = new Logger(ParseCategoryTrendsHandler.name)

  constructor(
    private readonly parseJobRepo: ParseJobRepository,
    private readonly productRepo: ProductRepository,
    private readonly http: HttpAdapter,
    private readonly extractor: ExtractorAdapter,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: ParseCategoryTrendsCommand): Promise<string> {
    const { userId, nodeId, limit } = command

    const job = await this.parseJobRepo.create({ userId, nodeId, type: 'CATEGORY_TRENDS' })
    await this.parseJobRepo.markRunning(job.id)

    this.runParsing(job.id, job.categoryId, nodeId, limit).catch((err) => {
      this.logger.error(`Background parse failed job=${job.id}: ${err.message}`)
    })

    return job.id
  }

  private async runParsing(jobId: string, categoryId: string, nodeId: string, limit: number) {
    const t0 = Date.now()

    try {
      const categoryResult = await this.http.fetchWithRetry(`/gp/browse.html?node=${nodeId}`)

      if (!categoryResult.ok) {
        throw new FetchFailedError(`/gp/browse.html?node=${nodeId}`, categoryResult.reason)
      }

      if (this.extractor.hasCaptcha(categoryResult.html)) {
        throw new CaptchaError(`/gp/browse.html?node=${nodeId}`)
      }

      const allItems = this.extractor.extractAsinsFromListing(categoryResult.html)

      if (!allItems.length) {
        throw new NoAsinsError(nodeId)
      }

      const items = allItems.slice(0, limit)

      const results = await this.runWithConcurrency(
        items.map((i) => i.asin),
        (asin) => this.fetchAndSave(asin, jobId, categoryId),
        PARSER_CONFIG.concurrency,
      )

      const ok = results.filter((r) => r === 'ok').length
      const failed = results.filter((r) => r !== 'ok').length

      await this.parseJobRepo.markDone(jobId, {
        productsFound: allItems.length,
        productsOk: ok,
        productsFailed: failed,
        durationMs: Date.now() - t0,
      })
    } catch (err) {
      await this.parseJobRepo.markFailed(jobId, err.message)
    }
  }

  private async fetchAndSave(asin: string, jobId: string, categoryId: string): Promise<string> {
    const productResult = await this.http.fetchWithRetry(`/dp/${asin}`)

    if (!productResult.ok || this.extractor.hasCaptcha(productResult.html)) {
      await this.productRepo.upsertFailedSnapshot(asin, jobId, 'CAPTCHA')
      return 'captcha'
    }

    const product = this.extractor.extractProductDetails(productResult.html, asin)

    if (!product) {
      await this.productRepo.upsertFailedSnapshot(asin, jobId, 'PARSE_ERROR')
      return 'parse_error'
    }

    await new Promise((r) => setTimeout(r, PARSER_CONFIG.intraProductDelayMs))

    const reviewsResult = await this.http.fetchWithRetry(`/product-reviews/${asin}`)
    const reviews =
      reviewsResult.ok && !this.extractor.hasCaptcha(reviewsResult.html)
        ? this.extractor.extractReviews(reviewsResult.html)
        : []

    await this.productRepo.upsertWithSnapshot(product, reviews, jobId, categoryId)
    this.eventBus.publish(new ProductParsedEvent(asin, jobId))

    return 'ok'
  }

  private async runWithConcurrency<T>(
    items: string[],
    task: (item: string) => Promise<T>,
    limit: number,
  ): Promise<T[]> {
    const results: T[] = new Array(items.length)
    let index = 0

    const worker = async () => {
      while (index < items.length) {
        const i = index++
        results[i] = await task(items[i])
      }
    }

    await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker))
    return results
  }
}