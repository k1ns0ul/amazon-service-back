import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { Logger } from '@nestjs/common'
import { ProductParsedEvent } from './product-parsed.event'

@EventsHandler(ProductParsedEvent)
export class ProductParsedHandler implements IEventHandler<ProductParsedEvent> {
  private readonly logger = new Logger(ProductParsedHandler.name)

  handle(event: ProductParsedEvent) {
    this.logger.debug(`ProductParsed asin=${event.asin} job=${event.jobId}`)
  }
}