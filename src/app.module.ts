// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UserSchema } from './users/user.model'; // Importe apenas UserSchema, não UserModel

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sergioalvesbarbosa:V1TVh4QBoQExDlx7@cluster0.r75d3cs.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    // ... outros módulos V1TVh4QBoQExDlx7
    // zdYYkMt7YwPfod5V
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
