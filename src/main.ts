import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/static', express.static(join(__dirname, '..', 'public', 'static')));

  app.enableCors({
    origin: ['http://localhost:4200', 'https://gamehub-sigma-six.vercel.app'],
  });

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
