// upload.controller.ts
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
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
