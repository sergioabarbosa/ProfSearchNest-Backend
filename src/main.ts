import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuração do middleware morgan para logging de requisições
  app.use(morgan('combined'));
  // Configuração do CORS para permitir requisições de qualquer origem
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
