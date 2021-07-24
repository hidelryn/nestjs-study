import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import {UserDto, CreateUserDto, DeleteUserDto} from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  main(): string {
    return 'Hello UserController!';
  }

  @Get('get-all-user')
  getAllUser(): UserDto[] {
    return this.userService.getAllUsers();
  }

  @Get('get-user')
  getUser(@Query('id') id: string): UserDto {
    // 쿼리스트링은 문자형으로 오고, 존재하지 않을 시에는 undefined
    return this.userService.getUser(Number(id));
  }

  @Post('create-user')
  createUser(@Body() createUserDto: CreateUserDto) {
    const result = this.userService.createUser(createUserDto);
    return result;
  }

  @Post('delete-user')
  deleteUser(@Body() deleteUserDto: DeleteUserDto) {
    this.userService.deleteUser(deleteUserDto);
  }
}
