import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { RegisterUserService } from './services/registerUser.service';
import { LoginUserService } from './services/loginUser.service';
import { ValidateTokenService } from './services/validateToken.service';
import { UsersModule } from '../users/users.module';
import { AuthGuard } from './guards/auth.guard';
import { HashModule } from 'src/infra/plugins/hash/hash.module';
import { JwtModule } from 'src/infra/plugins/jwt/jwt.module';

@Module({
  imports: [UsersModule, HashModule, JwtModule],
  controllers: [AuthController],
  providers: [
    RegisterUserService,
    LoginUserService,
    ValidateTokenService,
    AuthGuard,
  ],
  exports: [ValidateTokenService],
})
export class AuthModule {}
