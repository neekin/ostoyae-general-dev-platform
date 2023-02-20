import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShopModule } from '@ostoyae/shop';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ShopModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
