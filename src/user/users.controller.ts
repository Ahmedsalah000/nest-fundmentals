import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import {v4  as uuid} from 'uuid';

@Controller('users')
export class UserController {
  private readonly users:UserEntity[] = [];
  @Get()
  find(): UserEntity[] {
    return this.users// because i'm inside the class so i can use this.users and users is property
  }
  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string): UserEntity {
    return this.users.find((user)=>user.id===id)
  }

  @Post()
  //DTO==>Data Transfer Object is used to transfer data from one place to another and validate it
  @UsePipes(ValidationPipe)// validation pipe is used to validate the data
  create(@Body() userData:CreateUserDto) {
    
    const newUser:UserEntity = {
      id: uuid(),
      ...userData
    }
    this.users.push(newUser)
    return newUser;
  }

  @Patch(':id')// path
  @UsePipes( ValidationPipe)
  patchHello(@Param('id',ParseUUIDPipe) id: string, @Body() updateUserDto:UpdateUserDto): UserEntity {
    //1) find the element index in the array and update it
    const userIndex = this.users.findIndex((user)=>user.id===id)
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateUserDto
    }
    return this.users[userIndex]

    
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteHello(@Param('id', ParseUUIDPipe) id: string): string {
    const userIndex = this.users.findIndex((user)=>user.id===id)
    this.users.splice(userIndex,1)
    return 'User deleted'
    
  }
}
