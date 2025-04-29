import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControleFluxo } from './controleFluxo.entity';
import { ControleFluxoService } from './controleFluxo.service';
import { Cliente } from 'src/clientes/clientes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ControleFluxo, Cliente])],
  providers: [ControleFluxoService],
  controllers: [],
})
export class ControleFluxoModule {}
