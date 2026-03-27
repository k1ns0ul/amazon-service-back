import { IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator'

export class ParseCategoryTrendsDto {
  @IsString()
  @IsNotEmpty()
  nodeId: string

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number
}