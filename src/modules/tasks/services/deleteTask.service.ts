import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repository';

@Injectable()
export class DeleteTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async delete(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
