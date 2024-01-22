// anuncios.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnunciosController } from './ads.controller';
import { AnunciosService } from './ads.service';
import { Anuncio, AnuncioSchema } from './ads.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Anuncio.name, schema: AnuncioSchema }]),
  ],
  controllers: [AnunciosController],
  providers: [AnunciosService],
})
export class AnunciosModule {}
