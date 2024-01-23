// category.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async listarTodasCategorias() {
    try {
      const categorias = await this.categoryService.findAll();
      return {
        message: 'Categorias recuperadas com sucesso.',
        data: categorias,
        status: HttpStatus.OK,
      };
    } catch (error) {
      return {
        message: 'Erro ao recuperar categorias.',
        error: error.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async criarCategoria(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      const novaCategoria =
        await this.categoryService.create(createCategoryDto);
      return {
        message: 'Categoria criada com sucesso.',
        data: novaCategoria,
        status: HttpStatus.CREATED,
      };
    } catch (error) {
      return {
        message: 'Erro ao criar categoria.',
        error: error.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }
}
