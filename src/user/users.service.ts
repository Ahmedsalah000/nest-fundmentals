import { UpdateUserDto } from './dtos/update-user.dto';
import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { CreateUserDto } from "./dtos/create-user.dto";
import {v4  as uuid} from 'uuid'
import { UserResponseDto } from './dtos/user-response.dto';

@Injectable()
export class UsersService {
    private readonly users:UserEntity[] = [];
    findUsers():UserEntity[]{
        return this.users
    }

    findOne(id:string):UserEntity{
        return this.users.find((user)=>user.id===id)
    }

    create(createUserDto:CreateUserDto):UserResponseDto{
        const newUser:UserEntity = {
            id: uuid(),
            ...createUserDto
        }
        this.users.push(newUser)
        return new UserResponseDto(newUser)
    }

    update(id:string, updateUserDto:UpdateUserDto):UserEntity{
        const userIndex = this.users.findIndex((user)=>user.id===id)
        this.users[userIndex] = {
            ...this.users[userIndex],
            ...updateUserDto
        }
        return this.users[userIndex]
    }

    delete(id:string):void{
        const userIndex = this.users.findIndex((user)=>user.id===id)
        this.users.splice(userIndex,1)

    }

}