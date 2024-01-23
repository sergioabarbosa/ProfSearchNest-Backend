// anuncios.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnunciosController } from './ads.controller';
import { AnunciosService } from './ads.service';
import { Anuncio, AnuncioSchema } from './ads.model';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Anuncio.name, schema: AnuncioSchema }]),
    CategoryModule,
  ],
  controllers: [AnunciosController],
  providers: [AnunciosService],
})
export class AnunciosModule {}
