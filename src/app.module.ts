import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
import { AnunciosModule } from './ads/ads.module';
import { CategoryModule } from './category/category.module';
import { MulterModule } from '@nestjs/platform-express';
import { UploadController } from './profile_uploads/upload.controller';

dotenv.config();

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(process.env.DB),
    AuthModule,
    AnunciosModule,
    CategoryModule,
    MulterModule.register({
      dest: './uploads', // Diretório temporário onde as imagens serão salvas antes de serem processadas
    }),
  ],
  controllers: [AppController, UploadController],
  providers: [AppService],
})
export class AppModule {}
