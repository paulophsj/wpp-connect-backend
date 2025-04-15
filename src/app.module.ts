
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensagem } from './entities/mensagem.entity';
import { MessageModule } from './modules/mensagem.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST as any,
      port: process.env.DB_PORT as any,
      username: process.env.DB_USER as any,
      password: process.env.DB_PASSWORD as any,
      database: process.env.DB_TYPE as any,
      entities: [Mensagem],
      synchronize: true,
      autoLoadEntities: true,
    }),
    MessageModule,
  ],
})
export class AppModule {}
