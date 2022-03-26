// Cara Pertama (tidak perlu setup dotenv)
import 'dotenv/config';
// Cara Kedua (harus setup dotenv)
// import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

// setup dot env (gk perlu melakuakn setup ini juga import dotenv nya pake yg import 'dotenv/config')
// config({ path: '.env' });

const port: string = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  // untuk menampilkan log ke console
  //  parameter pertama adalah messagenya dan parameter kedua adalah context nya
  // kode di bawah akan menampilan seperti ini di console
  // LOG [App Port] Magic happens at http://localhost:4000
  Logger.log(`Magic happens at http://localhost:${port}`, 'App Port');
}
bootstrap();
