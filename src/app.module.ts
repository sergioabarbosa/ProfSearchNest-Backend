import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://sergioalvesbarbosa:X2xhKi6J0BKfKvQ0@cluster0.r75d3cs.mongodb.net/?retryWrites=true&w=majority',
    ), // X2xhKi6J0BKfKvQ0
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//Senha banco: a2fKhfZPpf1wCPz7
