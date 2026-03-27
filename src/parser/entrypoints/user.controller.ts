import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { ParseCategoryTrendsDto } from './dto/parse-category-trends.dto'
import { ParseCategoryTrendsCommand } from '../application/commands/parse-category-trends/parse-category-trends.command'
import { GetCategoryTrendsQuery } from '../application/queries/get-category-trends/get-category-trends.query'
import { DEFAULT_USER_ID } from './constants'

@Controller('parser')
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }))
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('trends')
  async parseTrends(@Body() dto: ParseCategoryTrendsDto) {
    const jobId = await this.commandBus.execute(
      new ParseCategoryTrendsCommand(DEFAULT_USER_ID, dto.nodeId, dto.limit ?? 50),
    )
    return { ok: true, jobId }
  }

  @Get('trends/:jobId')
  async getTrends(@Param('jobId') jobId: string) {
    const data = await this.queryBus.execute(new GetCategoryTrendsQuery(DEFAULT_USER_ID, jobId))
    return { ok: true, data }
  }
}