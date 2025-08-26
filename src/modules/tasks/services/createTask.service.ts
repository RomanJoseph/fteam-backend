import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repository';
import { CreateTaskRequest } from '../controller/request/createTask.request';
import { Task } from '../entities/task.entity';

@Injectable()
export class CreateTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(data: CreateTaskRequest): Promise<Task> {
    const task = new Task();
    task.title = data.title;
    task.description = data.description;
    task.status = data.status;

    return this.taskRepository.save(task);
  }
}
