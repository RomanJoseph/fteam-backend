import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TaskStatusEnum } from '../../enum/taskStatus.enum';

export class CreateTaskRequest {
  @ApiProperty({
    description: 'Title of the task',
    example: 'My first task',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Description of the task',
    example: 'This is my first task',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Status of the task',
    example: TaskStatusEnum.BACKLOG,
    enum: TaskStatusEnum,
  })
  @IsEnum(TaskStatusEnum)
  @IsNotEmpty()
  status: TaskStatusEnum;
}
