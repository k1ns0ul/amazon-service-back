import { ICommand } from '@nestjs/cqrs';
export declare class ParseCategoryTrendsCommand implements ICommand {
    readonly userId: string;
    readonly nodeId: string;
    readonly limit: number;
    constructor(userId: string, nodeId: string, limit: number);
}
