import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterUserRequest {
  @ApiProperty({
    description: 'User name',
    example: 'Test User',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User email',
    example: 'test@test.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
