import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ControleFluxo } from './controleFluxo.entity';
import { Repository } from 'typeorm';
import { TipoFluxo } from 'src/common/utils/tipoFluxo.util';
import { Message } from '@wppconnect-team/wppconnect';
import { ClientesService } from '../clientes/clientes.service';

@Injectable()
export class ControleFluxoService {
    constructor(
        @InjectRepository(ControleFluxo)
        private controleFluxoRepository: Repository<ControleFluxo>,

        private clienteService: ClientesService,
    ) { }

    
    async getFluxo(cliente: Message): Promise<ControleFluxo> {
        const hasControleFluxo = await this.controleFluxoRepository.findOne({
            where: { cliente: { telefone: cliente.from } },
            relations: ['cliente'],
        });
        if (!hasControleFluxo) {
            return await this.save(cliente, TipoFluxo.INICIO);
        }
        return hasControleFluxo;
    }
    async save(cliente: Message, tipoFluxo: TipoFluxo): Promise<ControleFluxo> {
        const findClient = await this.clienteService.findOne(cliente)
        const novoFluxo = this.controleFluxoRepository.create({
            tipoFluxo,
            cliente: findClient,
        });
        return await this.controleFluxoRepository.save(novoFluxo);
    }
    async update(cliente: Message,novoTipoFluxo: TipoFluxo): Promise<ControleFluxo> {
        const fluxo = await this.getFluxo(cliente);
        fluxo.tipoFluxo = novoTipoFluxo;
        return await this.controleFluxoRepository.save(fluxo);
    }
}
