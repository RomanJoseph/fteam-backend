import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repository';
import { Task } from '../entities/task.entity';

@Injectable()
export class ListTasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }
}
