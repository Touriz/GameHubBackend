import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './users.entity'; // Corrige la importación al nombre correcto

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() body: Partial<User>): Promise<User> {
    return this.userService.create(body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.delete(+id);
  }
}
