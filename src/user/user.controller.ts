import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  find(): string[] {
    return ['ahmed', 'salah', 'abdo'];
  }
  @Get(':username')
  findOne(@Param('username') username: string): string {
    return `username is ${username}`;
  }

  @Post()
  postHello(): string {
    return 'Helloooo World!';
  }
}
