import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

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
  //DTO==>Data Transfer Object is used to transfer data from one place to another and validate it
  create(@Body() userData:CreateUserDto) {
    
    return userData;
  }

  @Patch(':username')// path
  patchHello(@Param('username') username: string, @Body() input:UpdateUserDto): string {
    return `input is ${input}`;
  }
  @Delete(':username')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteHello(@Param('username') username: string): string {
    return `username is ${username}`;
  }
}
