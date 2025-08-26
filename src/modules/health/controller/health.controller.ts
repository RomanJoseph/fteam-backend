import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  public getHelloWolrd() {
    return 'Hello World!';
  }
}
