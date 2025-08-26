import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repository';
import { UpdateTaskRequest } from '../controller/request/updateTask.request';
import { Task } from '../entities/task.entity';

@Injectable()
export class UpdateTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async update(id: string, data: UpdateTaskRequest): Promise<Task> {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new NotFoundException('Tarefa não encontrada!');
    }

    task.title = data.title;
    task.description = data.description;
    task.status = data.status;
    return this.taskRepository.save(task);
  }
}
