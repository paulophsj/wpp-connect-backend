import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './clientes/clientes.module';
import { PedidoModule } from './pedido/pedido.module';
import { CardapioModule } from './cardapio/cardapio.module';
import { MensagemModule } from './mensagem/mensagem.module';
import { PedidoItemModule } from './pedido-item/pedidoItem.module';
import { RegiaoEntregaModule } from './regiao-entrega/regiaoEntrega.module';
import { ControleFluxoModule } from './controle-fluxo/controleFluxo.module';
import { WppModule } from './wpp/wpp.module';

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
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts}'],
      autoLoadEntities: true,
    }),
    CardapioModule,
    ClienteModule,
    MensagemModule,
    PedidoModule,
    PedidoItemModule,
    RegiaoEntregaModule,
    ControleFluxoModule,
    WppModule
  ],
})
export class AppModule {}
