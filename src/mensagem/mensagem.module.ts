import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensagem } from './mensagem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mensagem])],
  providers: [],
  controllers: [],
})
export class MensagemModule {}
