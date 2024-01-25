import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as crypto from 'crypto';
import * as mime from 'mime-types';

@Controller('upload')
export class UploadController {
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
  async uploadFile(@UploadedFile() file) {
    try {
      if (!file) {
        throw new Error('Arquivo não enviado na requisição');
      }

      // Restante do código...
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error?.message || error);
      if (error) {
        throw new Error(
          `Erro ao fazer upload da imagem: ${error.message || error}`,
        );
      }
    }
  }
}
