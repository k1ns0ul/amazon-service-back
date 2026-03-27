import { IQuery } from '@nestjs/cqrs';
export declare class GetCategoryTrendsQuery implements IQuery {
    readonly userId: string;
    readonly jobId: string;
    constructor(userId: string, jobId: string);
}
