import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/models/clientes/clientes.entity';
import { ControleFluxo } from 'src/models/controle-fluxo/controleFluxo.entity';
import { Mensagem } from 'src/models/mensagem/mensagem.entity';
import { WhatsappService } from './Whatsapp.service';
import { AppService } from 'src/app.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [
    WhatsappService, AppService
  ],
  controllers: [],
})
export class WhatsappModule {}
