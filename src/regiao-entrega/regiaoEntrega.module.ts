import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegiaoEntrega } from './regiaoEntrega.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegiaoEntrega])],
  providers: [],
  controllers: [],
})
export class RegiaoEntregaModule {}
