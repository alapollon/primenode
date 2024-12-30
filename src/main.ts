import * as session from 'express-session';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './logger.interceptor';

async function bootstrap() {
  const httpsOptions = {
    key: process.env.PRODUCTION_KEY,
    cert: process.env.PRODUCTION_CERT 
  }
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'tungsten',
      resave: false, 
      saveUninitialized: false 
    }),
    httpsOptions,
    LoggingInterceptor
  );
  await app.listen(process.env.PORT ?? 3020);
}
bootstrap();
