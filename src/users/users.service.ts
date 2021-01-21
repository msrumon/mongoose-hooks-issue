import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './user.dto';
import { name, User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(name) private readonly userModel: Model<User>) {}

  async create(userDto: UserDto) {
    const user = new this.userModel(userDto);
    await user.save();
    return user;
  }
}
