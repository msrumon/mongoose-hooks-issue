import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async store(@Body() userDto: UserDto) {
    const user = await this.usersService.create(userDto);
    return { id: user._id, name: user.name, email: user.email };
  }
}
