import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cliente } from 'src/models/clientes/clientes.entity';
import { Mensagem } from 'src/models/mensagem/mensagem.entity';
import { ControleFluxo } from 'src/models/controle-fluxo/controleFluxo.entity';

import { ControleFluxoService } from 'src/models/controle-fluxo/controleFluxo.service';
import { ClientesService } from 'src/models/clientes/clientes.service';
import { ClienteStatusService } from 'src/fluxo_cliente/services/clienteStatus.service';
import { ClienteFluxoService } from 'src/fluxo_cliente/services/clienteFluxo.service';
import { MensagemService } from 'src/models/mensagem/mensagem.service';
import { FluxoInicioService } from 'src/fluxo_cliente/inicio/fluxoInicio.service';
import { FluxoCardapioService } from 'src/fluxo_cliente/cardapio/fluxoCardapio.service';
import { MensagemFluxoService } from 'src/models/mensagem-fluxo/mensagemFluxo.service';
import { MensagemFluxo } from 'src/models/mensagem-fluxo/mensagemFluxo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ControleFluxo, Cliente, Mensagem, MensagemFluxo])],
  providers: [
    ControleFluxoService,
    ClientesService,
    ClienteStatusService,
    ClienteFluxoService,
    FluxoInicioService,
    FluxoCardapioService,
    MensagemFluxoService,
    MensagemService,
  ],
  exports: [
    TypeOrmModule,
    ControleFluxoService,
    ClientesService,
    ClienteStatusService,
    ClienteFluxoService,
    FluxoInicioService,
    MensagemService,
    MensagemFluxoService,
    FluxoCardapioService,
  ],
})
export class SharedServices {}
