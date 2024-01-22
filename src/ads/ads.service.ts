// anuncios.service.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Anuncio, AnuncioDocument } from './ads.model';
import { CreateAnuncioDto, UpdateAnuncioDto } from './ads.dto';

@Injectable()
export class AnunciosService {
  constructor(
    @InjectModel(Anuncio.name) private anuncioModel: Model<AnuncioDocument>,
  ) {}

  async create(createAnuncioDto: CreateAnuncioDto): Promise<Anuncio> {
    const createdAnuncio = new this.anuncioModel(createAnuncioDto);
    return createdAnuncio.save();
  }

  async findAll(): Promise<Anuncio[]> {
    return this.anuncioModel.find().exec();
  }

  async findOne(id: string): Promise<Anuncio | null> {
    return this.anuncioModel.findById(id).exec();
  }

  async update(
    id: string,
    updateAnuncioDto: UpdateAnuncioDto,
  ): Promise<Anuncio | null> {
    const updatedAnuncio = await this.anuncioModel
      .findByIdAndUpdate(id, updateAnuncioDto, { new: true })
      .exec();
    return updatedAnuncio;
  }

  async remove(id: string): Promise<void> {
    await this.anuncioModel.findByIdAndDelete(id).exec();
  }
}
