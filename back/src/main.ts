// ARCHIVO PRINCIPAL Y LLAMA A APP.MODI¿ULLE 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {
      origin: 'http://localhost:4200',
      methods: 'GET,HEAD, PUT,PATCH,POST,DELETE, OPTIONS',
      allowedHeaders: 'Content-Type, Accept',
    }
  )
  await app.listen(3000);
}
bootstrap();
