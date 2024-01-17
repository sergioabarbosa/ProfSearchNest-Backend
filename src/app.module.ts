// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UserSchema } from './users/user.model'; // Importe apenas UserSchema, não UserModel
import { AuthService } from '../auth/auth.service'; // Crie este arquivo
import { JwtStrategy } from '../auth/jwt.strategy'; // Crie este arquivo
import * as dotenv from 'dotenv';
import { JwtModule } from '@nestjs/jwt';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      secret: process.env.SECRET, // Substitua com sua chave secreta
      signOptions: { expiresIn: '3d' }, // Defina o tempo de expiração do token
    }),

    // ... outros módulos V1TVh4QBoQExDlx7
    // zdYYkMt7YwPfod5V
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService, JwtStrategy],
  exports: [JwtModule],
})
export class AppModule {}
