import { NestFactory } from '@nestjs/core';
import { ErpModule } from './erp.module';

async function bootstrap() {
  const app = await NestFactory.create(ErpModule);
  await app.listen(3000);
}
bootstrap();
