import { EventBus, ICommandHandler } from '@nestjs/cqrs';
import { ParseCategoryTrendsCommand } from './parse-category-trends.command';
import { ParseJobRepository } from '../../../../database/repositories/parse-job.repository';
import { ProductRepository } from '../../../../database/repositories/product.repository';
import { HttpAdapter } from '../../../adapters/http.adapter';
import { ExtractorAdapter } from '../../../adapters/extractor.adapter';
export declare class ParseCategoryTrendsHandler implements ICommandHandler<ParseCategoryTrendsCommand> {
    private readonly parseJobRepo;
    private readonly productRepo;
    private readonly http;
    private readonly extractor;
    private readonly eventBus;
    private readonly logger;
    constructor(parseJobRepo: ParseJobRepository, productRepo: ProductRepository, http: HttpAdapter, extractor: ExtractorAdapter, eventBus: EventBus);
    execute(command: ParseCategoryTrendsCommand): Promise<string>;
    private runParsing;
    private fetchAndSave;
    private runWithConcurrency;
}
