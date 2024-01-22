// anuncios.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { AnunciosService } from './ads.service';
import { CreateAnuncioDto, UpdateAnuncioDto } from './ads.dto';

@Controller('anuncios')
export class AnunciosController {
  constructor(private readonly anunciosService: AnunciosService) {}

  @Post()
  async create(@Body() createAnuncioDto: CreateAnuncioDto) {
    try {
      const createdAnuncio =
        await this.anunciosService.create(createAnuncioDto);
      return {
        message: 'Anúncio criado com sucesso!',
        data: createdAnuncio,
        status: HttpStatus.CREATED,
      };
    } catch (error) {
      return {
        message: 'Erro ao criar o anúncio.',
        error: error.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  @Get()
  async findAll() {
    try {
      const anuncios = await this.anunciosService.findAll();
      return {
        message: 'Anúncios recuperados com sucesso!',
        data: anuncios,
        status: HttpStatus.OK,
      };
    } catch (error) {
      return {
        message: 'Erro ao recuperar os anúncios.',
        error: error.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const anuncio = await this.anunciosService.findOne(id);
      if (anuncio) {
        return {
          message: 'Anúncio encontrado com sucesso!',
          data: anuncio,
          status: HttpStatus.OK,
        };
      } else {
        return {
          message: 'Anúncio não encontrado!',
          data: null,
          status: HttpStatus.NOT_FOUND,
        };
      }
    } catch (error) {
      return {
        message: 'Erro ao recuperar o anúncio.',
        error: error.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAnuncioDto: UpdateAnuncioDto,
  ) {
    try {
      const updatedAnuncio = await this.anunciosService.update(
        id,
        updateAnuncioDto,
      );
      if (updatedAnuncio) {
        return {
          message: 'Anúncio atualizado com sucesso!',
          data: updatedAnuncio,
          status: HttpStatus.OK,
        };
      } else {
        return {
          message: 'Anúncio não encontrado!',
          data: null,
          status: HttpStatus.NOT_FOUND,
        };
      }
    } catch (error) {
      return {
        message: 'Erro ao atualizar o anúncio.',
        error: error.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.anunciosService.remove(id);
      return {
        message: 'Anúncio removido com sucesso!',
        status: HttpStatus.OK,
      };
    } catch (error) {
      return {
        message: 'Erro ao remover o anúncio.',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }
}
