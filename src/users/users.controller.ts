import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TestGuard } from './test.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(
    // (@Body("email") email: string,
    //   @Body("password") password: string,
    //   @Body("name") name: string,
    @Body() quocloc: CreateUserDto
  ) { //CreateUserDto kieu gia tri
    //req.body
    //= const myEmail: string =req.body.email//string
    return this.usersService.create(quocloc);
  }
  @UseGuards(TestGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')//nam sau / la id
  findOne(@Param('id') id: string) {
    //const id:string =req.paramse.id
    return this.usersService.findOne(id);
  }

  @Patch()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
