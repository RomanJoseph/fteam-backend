import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repository';
import { Task } from '../entities/task.entity';
import { IFilterResponse } from 'src/shared/helpers/filters/IFilterResponse';
import { IFilterQuery } from 'src/shared/helpers/filters/typeorm/FilterBuilder';

@Injectable()
export class ListTasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  public async execute(
    user_id: string,
    query: IFilterQuery,
  ): Promise<IFilterResponse<Task>> {
    const [result, total] = await this.taskRepository.findAllForUser(
      user_id,
      query,
    );

    const response: IFilterResponse<Task> = {
      result,
      total,
      total_page: Math.ceil(total / (query.per_page || 10)),
    };

    return response;
  }
}
