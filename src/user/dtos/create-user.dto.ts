// dto file is resposible for validating the data that is being sent to the server
// and the type of data that is being sent to the server
export class CreateUserDto {
    username: string;
    email: string;
    age: number;
}