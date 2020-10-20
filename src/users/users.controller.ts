import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers()
  }

  @Get(':id')
  getUserInfo(@Param() pa: any) {
    const { id } = pa
    return  this.usersService.getUserInfo(id)
  }
}