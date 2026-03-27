import { ICommand } from '@nestjs/cqrs'

export class ParseCategoryTrendsCommand implements ICommand {
  constructor(
    public readonly userId: string,
    public readonly nodeId: string,
    public readonly limit: number,
  ) {}
}