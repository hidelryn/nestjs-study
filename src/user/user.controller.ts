import { Body, Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, CreateUserDto, DeleteUserDto } from './user.dto';
import {ResultTransformInterceptor} from '../common/interceptor/result.transform.interceptor';

interface UserResult {
  user: UserDto[] | UserDto;
}

@UseInterceptors(ResultTransformInterceptor)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('get-all')
  getAllUser(): UserResult {
    const result: UserResult = {
      user: this.userService.getAllUsers()
    }
    return result;
  }

  @Get('get-one')
  getUser(@Query('id') id: string): UserResult {
    // 쿼리스트링은 문자형으로 오고, 존재하지 않을 시에는 undefined
    const result: UserResult = {
      user: this.userService.getUser(Number(id))
    }
    return result;
  }

  
  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto): UserResult {
    // return res.set({ 'X-ACCESS-TOKEN': Crypto.randomBytes(6) }).json(result);
    const result: UserResult = {
      user: this.userService.createUser(createUserDto)
    }
    return result;
  }
}
