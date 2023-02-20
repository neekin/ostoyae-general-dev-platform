import { NestFactory } from '@nestjs/core';
import { WexinModule } from './weixin.module';

async function bootstrap() {
  const app = await NestFactory.create(WexinModule);
  await app.listen(3000);
}
bootstrap();
