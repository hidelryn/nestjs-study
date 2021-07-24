import { Injectable } from '@nestjs/common';
import { UserDto, CreateUserDto, DeleteUserDto } from './user.dto';

@Injectable()
export class UserService {
  // nest g service 서비스명
  private users: UserDto[] = [];
  private id: number = 0;

  createUser(createUserDto: CreateUserDto): UserDto {
    const ts = Date.now();
    const createUser: UserDto = {
      id: this.id,
      name: createUserDto.name,
      age: createUserDto.age,
      createAt: ts,
      updateAt: ts,
    };
    this.users.push(createUser);
    this.id++;
    return createUser;
  }

  getAllUsers(): UserDto[] {
    return this.users;
  }

  getUser(id: number): UserDto | null {
    const idx = this.findUser(id);
    if (idx === -1) return null;
    return this.users[idx];
  }

  deleteUser(deleteUserDto: DeleteUserDto) {
    const idx = this.findUser(deleteUserDto.id);
    this.users.splice(idx, 1);
  }

  private findUser(id: number): number {
    return this.users.findIndex((user) => user.id === id);
  }
}
