import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para el frontend
  app.enableCors({
  origin: 'http://localhost:3000', 
});

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  const config = new DocumentBuilder()
    .setTitle('API de Tareas')
    .setDescription('Documentación del CRUD de tareas (NestJS + Prisma)')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
  console.log(`🚀 Backend corriendo en: http://localhost:4000`);
  console.log(`📘 Swagger: http://localhost:4000/api`);
}
bootstrap();
