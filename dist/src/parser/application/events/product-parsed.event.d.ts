import { IEvent } from '@nestjs/cqrs';
export declare class ProductParsedEvent implements IEvent {
    readonly asin: string;
    readonly jobId: string;
    constructor(asin: string, jobId: string);
}
