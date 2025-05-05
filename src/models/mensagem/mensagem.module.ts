import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cliente } from 'src/models/clientes/clientes.entity';
import { Mensagem } from './mensagem.entity';

import { MensagemService } from './mensagem.service';
import { ClientesService } from '../clientes/clientes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mensagem, Cliente])],
  providers: [MensagemService, ClientesService],
  controllers: [],
})
export class MensagemModule {}
