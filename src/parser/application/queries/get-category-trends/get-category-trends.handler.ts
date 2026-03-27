import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { GetCategoryTrendsQuery } from './get-category-trends.query'
import { ParseJobRepository } from '../../../../database/repositories/parse-job.repository'

@QueryHandler(GetCategoryTrendsQuery)
export class GetCategoryTrendsHandler implements IQueryHandler<GetCategoryTrendsQuery> {
  constructor(private readonly parseJobRepo: ParseJobRepository) {}

  async execute(query: GetCategoryTrendsQuery) {
    return this.parseJobRepo.findByIdWithProducts(query.jobId, query.userId)
  }
}