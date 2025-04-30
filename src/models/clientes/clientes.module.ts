import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './clientes.entity';
import { ClientesService } from './clientes.service';
import { ControleFluxoService } from '../controle-fluxo/controleFluxo.service';
import { ControleFluxo } from '../controle-fluxo/controleFluxo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, ControleFluxo])],
  providers: [ClientesService, ControleFluxoService],
  controllers: [],
})
export class ClienteModule {}
