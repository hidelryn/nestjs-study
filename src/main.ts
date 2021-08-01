import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TimeStampMiddleWare } from './common/middleware/timestamp.middleware';
import {LoggerInterCeptor} from './common/interceptor/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggerInterCeptor());
  app.use(TimeStampMiddleWare);
  await app.listen(3000);
}
bootstrap();
