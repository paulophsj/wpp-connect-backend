import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cardapio } from './cardapio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cardapio])],
  providers: [],
  controllers: [],
})
export class CardapioModule {}
