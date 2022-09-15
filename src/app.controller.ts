import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Logger } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user/health')
  health() {
    return this.appService.health();
  }

  @Get('/user/metrics')
  metrics() {
    return this.appService.metrics();
  }

  @Get('/user/:id')
  getById(@Param('id') id: number) {
    return this.appService.getUserById(id);
  }

  @Post('/user')
  create(@Body() createItemDto) {
    return this.appService.createUser(createItemDto);
  }
}
