import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './clientes.entity';
import { WppService } from 'src/wpp/wpp.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [WppService],
  controllers: [],
})
export class ClienteModule {}
