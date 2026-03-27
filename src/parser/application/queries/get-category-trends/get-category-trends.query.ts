import { IQuery } from '@nestjs/cqrs'

export class GetCategoryTrendsQuery implements IQuery {
  constructor(
    public readonly userId: string,
    public readonly jobId: string,
  ) {}
}