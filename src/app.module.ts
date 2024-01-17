// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UserSchema } from './users/user.model'; // Importe apenas UserSchema, não UserModel
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    // ... outros módulos V1TVh4QBoQExDlx7
    // zdYYkMt7YwPfod5V
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
