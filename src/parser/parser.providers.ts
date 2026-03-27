import { ParseCategoryTrendsHandler } from './application/commands/parse-category-trends/parse-category-trends.handler'
import { GetCategoryTrendsHandler } from './application/queries/get-category-trends/get-category-trends.handler'
import { ProductParsedHandler } from './application/events/product-parsed.handler'
import { HttpAdapter } from './adapters/http.adapter'
import { ExtractorAdapter } from './adapters/extractor.adapter'
import { ProxyAdapter } from './adapters/proxy.adapter'
import { PuppeteerAdapter } from './adapters/puppeteer.adapter'
import { SessionAdapter } from './adapters/session.adapter'

export const CommandHandlers = [ParseCategoryTrendsHandler]
export const QueryHandlers = [GetCategoryTrendsHandler]
export const EventHandlers = [ProductParsedHandler]
export const Adapters = [HttpAdapter, ExtractorAdapter, ProxyAdapter, PuppeteerAdapter, SessionAdapter]