import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptors } from './interceptors/transform.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptors());
  await app.listen(3000, () => console.log('AppModule start on port 3000!'));
}
bootstrap();
