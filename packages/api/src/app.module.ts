import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopModule } from '@ostoyae/shop';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.dev.sqlite3',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ShopModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
