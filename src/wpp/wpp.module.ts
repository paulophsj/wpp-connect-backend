import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WppService } from 'src/wpp/wpp.service';
import { ClientesService } from 'src/clientes/clientes.service';
import { Cliente } from 'src/clientes/clientes.entity';
import { ControleFluxo } from 'src/controle-fluxo/controleFluxo.entity';
import { ControleFluxoService } from 'src/controle-fluxo/controleFluxo.service';
import { MensagemService } from 'src/mensagem/mensagem.service';
import { Mensagem } from 'src/mensagem/mensagem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, ControleFluxo, Mensagem])],
  providers: [
    ControleFluxoService,ClientesService, MensagemService, //Services
    WppService
  ],
  controllers: [],
})
export class WppModule {}
