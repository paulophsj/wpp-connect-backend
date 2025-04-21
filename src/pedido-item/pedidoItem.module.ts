import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoItem } from './pedidoItem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoItem])],
  providers: [],
  controllers: [],
})
export class PedidoItemModule {}
