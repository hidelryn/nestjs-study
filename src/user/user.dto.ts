
import * as Types from '../libs/types';

export class UserDto {
    id: Types.ID;
    name: Types.Name;
    age: Types.Age;
    createAt: Types.CreateAt;
    updateAt: Types.UpdateAt;
}

export class CreateUserDto {
    name: Types.Name;
    age: Types.Age;
}

export class DeleteUserDto {
    id: Types.ID
}

