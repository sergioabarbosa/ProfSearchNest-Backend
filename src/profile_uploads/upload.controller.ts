// upload.controller.ts

import {
  Controller,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as crypto from 'crypto';
import * as mime from 'mime-types';
import { UsersService } from '../users/users.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          crypto.pseudoRandomBytes(16, function (err, raw) {
            cb(
              null,
              raw.toString('hex') +
                Date.now() +
                '.' +
                mime.extension(file.mimetype),
            );
          });
        },
      }),
      limits: { fieldSize: 25 * 1024 * 1024 },
    }),
  )
  async uploadFile(@UploadedFile() file, @Req() req) {
    try {
      if (!file) {
        throw new Error('Arquivo não enviado na requisição');
      }

      const userId = req.user.id; // Supondo que você tenha o ID do usuário na requisição
      const imagePath = '/uploads/' + file.filename; // Supondo que o caminho da imagem seja /uploads/nome-do-arquivo.extensao

      // Atualiza o caminho da imagem do usuário
      await this.usersService.updateUserImage(userId, imagePath);

      return { message: 'Imagem enviada com sucesso' };
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error.message);
      throw new Error('Erro ao fazer upload da imagem');
    }
  }
}
