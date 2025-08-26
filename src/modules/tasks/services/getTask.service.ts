import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repository';
import { Task } from '../entities/task.entity';

@Injectable()
export class GetTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async findOne(id: string): Promise<Task> {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new NotFoundException('Tarefa não encontrada!');
    }

    return task;
  }
}
