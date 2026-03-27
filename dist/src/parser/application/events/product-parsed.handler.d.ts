import { IEventHandler } from '@nestjs/cqrs';
import { ProductParsedEvent } from './product-parsed.event';
export declare class ProductParsedHandler implements IEventHandler<ProductParsedEvent> {
    private readonly logger;
    handle(event: ProductParsedEvent): void;
}
