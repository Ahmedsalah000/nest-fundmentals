import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';
import { UserResponseDto } from './dtos/user-response.dto';

@Controller('users')
export class UserController {
  constructor (private readonly userService:UsersService) {}
  @Get()
  find(): UserEntity[] {
    return this.userService.findUsers()
  }
  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string): UserEntity {
    return this.userService.findOne(id)
  }

  @Post()
  create(@Body() createUserDto:CreateUserDto):UserResponseDto {
    return this.userService.create(createUserDto)    
  }

  @Patch(':id')// path
  patchHello(@Param('id',ParseUUIDPipe) id: string, @Body() updateUserDto:UpdateUserDto): UserEntity {
    return this.userService.update(id,updateUserDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseUUIDPipe) id: string){
    this.userService.delete(id)

    
  }
}
