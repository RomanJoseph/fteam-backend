import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsPositive,
  IsIn,
  ValidateIf,
  IsNotEmpty,
} from 'class-validator';
import { IsEqualLength } from 'src/shared/validators/is-equal-length.validator';

const filterTypes = [
  'eq',
  'not',
  'not_in',
  'in',
  'like',
  'ge',
  'le',
  'btw',
  'is_null',
];

const orderTypes = ['asc', 'desc'];

export class ListTasksRequest {
  @ApiPropertyOptional({
    description: 'Page number',
    example: 1,
  })
  @Type(() => Number)
  @IsPositive()
  @IsNumber()
  @IsOptional()
  page?: number;

  @ApiPropertyOptional({
    description: 'Number of items per page',
    example: 10,
  })
  @Type(() => Number)
  @IsPositive()
  @IsNumber()
  @IsOptional()
  per_page?: number;

  @ApiPropertyOptional({
    description: 'Filter by field',
    example: 'status',
  })
  @ValidateIf((o: ListTasksRequest) => !!(o.filterType || o.filterValue))
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  filterBy?: string;

  @ApiPropertyOptional({
    description: 'Filter type',
    example: 'eq',
    enum: filterTypes,
  })
  @ValidateIf((o: ListTasksRequest) => !!(o.filterBy || o.filterValue))
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @IsIn(filterTypes)
  @IsEqualLength('filterBy', {
    message:
      'filterType must have the same number of comma-separated values as filterBy',
  })
  filterType?: string;

  @ApiPropertyOptional({
    description: 'Filter value',
    example: 'done',
  })
  @ValidateIf((o: ListTasksRequest) => !!(o.filterBy || o.filterType))
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @IsEqualLength('filterBy', {
    message:
      'filterValue must have the same number of comma-separated values as filterBy',
  })
  filterValue?: string;

  @ApiPropertyOptional({
    description: 'Order by field',
    example: 'created_at',
  })
  @ValidateIf((o: ListTasksRequest) => !!o.orderType)
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  orderBy?: string;

  @ApiPropertyOptional({
    description: 'Order type',
    example: 'desc',
    enum: orderTypes,
  })
  @IsIn(orderTypes)
  @IsString()
  @IsOptional()
  orderType?: 'asc' | 'desc';
}
