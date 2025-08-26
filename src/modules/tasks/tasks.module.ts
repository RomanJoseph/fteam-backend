import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TaskRepository } from './repositories/task.repository';
import { CreateTaskService } from './services/createTask.service';
import { ListTasksService } from './services/listTasks.service';
import { GetTaskService } from './services/getTask.service';
import { UpdateTaskService } from './services/updateTask.service';
import { DeleteTaskService } from './services/deleteTask.service';
import { TaskController } from './controller/tasks.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { TransactionMiddleware } from 'src/shared/middleware/transaction.middleware';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [TaskController],
  providers: [
    TaskRepository,
    CreateTaskService,
    ListTasksService,
    GetTaskService,
    UpdateTaskService,
    DeleteTaskService,
  ],
})
export class TaskModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TransactionMiddleware).forRoutes(TaskController);
  }
}
