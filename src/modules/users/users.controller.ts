import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('User Controller')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiQuery({ name: 'code', required: false })
  @ApiQuery({ name: 'id', required: false })
  findOneByCode(@Query('code') code: string, @Query('id') id: string) {
    return this.usersService.findOne({ code, id });
  }
}
