import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataForm } from 'src/entities/dataform.entity';
import { Mensagem } from 'src/entities/mensagem.entity';
import { MensagemService } from 'src/services/mensagem.service';
import { WppService } from 'src/services/wpp.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mensagem, dataForm])],
  providers: [MensagemService, WppService],
})
export class MessageModule {}
