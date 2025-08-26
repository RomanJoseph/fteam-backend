import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { TaskModule } from './modules/tasks/tasks.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [DatabaseModule, TaskModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
