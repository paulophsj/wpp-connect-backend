import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ControleFluxo } from 'src/models/controle-fluxo/controleFluxo.entity';
import { Cliente } from 'src/models/clientes/clientes.entity';

import { ControleFluxoService } from 'src/models/controle-fluxo/controleFluxo.service';
import { ClientesService } from 'src/models/clientes/clientes.service';
import { ClienteStatusService } from 'src/fluxo_cliente/services/clienteStatus.service';
import { ClienteFluxoService } from 'src/fluxo_cliente/services/clienteFluxo.service';
import { FluxoInicioService } from 'src/fluxo_cliente/inicio/fluxoInicio.service';

@Module({
  imports: [TypeOrmModule.forFeature([ControleFluxo, Cliente])],
  providers: [
    ControleFluxoService,
    ClientesService,
    ClienteStatusService,
    ClienteFluxoService,
    FluxoInicioService,
  ],
  exports: [
    TypeOrmModule,
    ControleFluxoService,
    ClientesService,
    ClienteStatusService,
    ClienteFluxoService,
    FluxoInicioService,
  ],
})
export class SharedServices {}
