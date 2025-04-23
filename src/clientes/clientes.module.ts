import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './clientes.entity';
import { WppService } from 'src/wpp/wpp.service';
import { ClientesService } from './clientes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [WppService, ClientesService],
  controllers: [],
})
export class ClienteModule {}
