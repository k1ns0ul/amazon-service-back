import { IEvent } from '@nestjs/cqrs'

export class ProductParsedEvent implements IEvent {
  constructor(
    public readonly asin: string,
    public readonly jobId: string,
  ) {}
}