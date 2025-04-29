import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensagem } from './mensagem.entity';
import { MensagemService } from './mensagem.service';
import { Cliente } from 'src/models/clientes/clientes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mensagem, Cliente])],
  providers: [MensagemService],
  controllers: [],
})
export class MensagemModule {}
