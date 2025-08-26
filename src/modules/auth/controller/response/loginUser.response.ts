import { ApiProperty } from '@nestjs/swagger';

export class LoginUserResponse {
  @ApiProperty({
    description: 'JWT Token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  token: string;
}
