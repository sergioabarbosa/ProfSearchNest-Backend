// users.controller.ts
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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const createdUser = await this.usersService.create(createUserDto);

      return {
        message: 'Usuário criado com sucesso!',
        data: createdUser,
        status: HttpStatus.CREATED,
      };
    } catch (error) {
      return {
        message: 'Erro ao criar o usuário.',
        error: error.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findById(id);

    if (user) {
      return {
        message: 'Usuário encontrado com sucesso!',
        data: user,
        status: HttpStatus.OK,
      };
    } else {
      return {
        message: 'Usuário não encontrado!',
        data: null,
        status: HttpStatus.NOT_FOUND,
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // Certifique-se de que updateUserDto contenha os novos campos
    console.log(updateUserDto);

    // Atualize a lógica para refletir os campos adicionados
    const updatedUser = await this.usersService.update(id, updateUserDto);

    if (updatedUser) {
      return {
        'Usuário atualizado com sucesso!': updatedUser,
      };
    } else {
      return {
        'Usuário não encontrado!': null,
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.usersService.remove(id);
      return {
        message: 'Usuário removido com sucesso!',
        status: HttpStatus.OK,
      };
    } catch (error) {
      return {
        message: 'Erro ao remover o usuário.',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }
}
