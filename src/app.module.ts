import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { TaskModule } from './modules/tasks/tasks.module';

@Module({
  imports: [DatabaseModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
