import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ParseCategoryTrendsDto } from './dto/parse-category-trends.dto';
export declare class UserController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    parseTrends(dto: ParseCategoryTrendsDto): Promise<{
        ok: boolean;
        jobId: any;
    }>;
    getTrends(jobId: string): Promise<{
        ok: boolean;
        data: any;
    }>;
}
