import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WppService } from 'src/wpp/wpp.service';
import { ClientesService } from 'src/models/clientes/clientes.service';
import { Cliente } from 'src/models/clientes/clientes.entity';
import { ControleFluxo } from 'src/models/controle-fluxo/controleFluxo.entity';
import { ControleFluxoService } from 'src/models/controle-fluxo/controleFluxo.service';
import { MensagemService } from 'src/models/mensagem/mensagem.service';
import { Mensagem } from 'src/models/mensagem/mensagem.entity';
import { fluxoCliente } from 'src/fluxoCliente/fluxoCliente';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, ControleFluxo, Mensagem])],
  providers: [
    ControleFluxoService,ClientesService, MensagemService, fluxoCliente,
    WppService
  ],
  controllers: [],
})
export class WppModule {}
