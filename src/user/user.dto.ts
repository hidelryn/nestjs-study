type ID = number;
type Name = string;
type Age = number;
type CreateAt = number;
type UpdateAt = number;

export class UserDto {
  id: ID;
  name: Name;
  age: Age;
  createAt: CreateAt;
  updateAt: UpdateAt;
}

export class CreateUserDto {
  name: Name;
  age: Age;
}

export class DeleteUserDto {
  id: ID;
}
