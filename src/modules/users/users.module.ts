import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class UsersModule {}
