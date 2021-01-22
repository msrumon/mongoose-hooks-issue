import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import { name, UserSchema } from './user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name,
        useFactory: () => {
          UserSchema.pre('save', async function (next) {
            if (this.isModified('password')) {
              this.password = await hash(this.password, 10);
              next();
            }
          });
          return UserSchema;
        },
      },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
