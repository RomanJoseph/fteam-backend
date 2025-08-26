import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TaskStatusEnum } from '../../enum/taskStatus.enum';

export class UpdateTaskRequest {
  @ApiProperty({
    description: 'Title of the task',
    example: 'My updated task',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Description of the task',
    example: 'This is my updated task',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Status of the task',
    example: TaskStatusEnum.IN_PROGRESS,
    enum: TaskStatusEnum,
  })
  @IsEnum(TaskStatusEnum)
  @IsNotEmpty()
  status: TaskStatusEnum;
}
