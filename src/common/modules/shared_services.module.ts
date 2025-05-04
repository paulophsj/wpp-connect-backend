import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ControleFluxo } from 'src/models/controle-fluxo/controleFluxo.entity';
import { Cliente } from 'src/models/clientes/clientes.entity';

import { ControleFluxoService } from 'src/models/controle-fluxo/controleFluxo.service';
import { ClientesService } from 'src/models/clientes/clientes.service';
import { ClienteStatusService } from 'src/FluxoCliente/services/ClienteStatus.service';
import { ClienteFluxoService } from 'src/FluxoCliente/services/ClienteFluxo.service';
import { FluxoInicioService } from 'src/FluxoCliente/Inicio/FluxoInicio.service';

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
