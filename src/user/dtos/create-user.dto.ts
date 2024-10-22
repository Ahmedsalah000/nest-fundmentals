// dto file is resposible for validating the data that is being sent to the server

import { IsEmail, IsInt, IsString, Length } from "class-validator";

// and the type of data that is being sent to the server
export class CreateUserDto {
    @IsString()
    @Length( 3,20,{message:' username must be between 3 and 20 characters'})
    readonly username: string;

    @IsEmail()
    readonly email: string;
    @IsInt()
    readonly age: number;
}