import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './models/clientes/clientes.module';
import { PedidoModule } from './models/pedido/pedido.module';
import { CardapioModule } from './models/cardapio/cardapio.module';
import { MensagemModule } from './models/mensagem/mensagem.module';
import { PedidoItemModule } from './models/pedido-item/pedidoItem.module';
import { RegiaoEntregaModule } from './models/regiao-entrega/regiaoEntrega.module';
import { ControleFluxoModule } from './models/controle-fluxo/controleFluxo.module';
import { WhatsappModule } from './Whatsapp/WhatsappModule';

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
    WhatsappModule
  ],
})
export class AppModule {}
