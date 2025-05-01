import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ControleFluxo } from './controleFluxo.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/models/clientes/clientes.entity';
import { tipoFluxo } from 'src/utils/tipoFluxo';
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
            return await this.save(cliente, tipoFluxo.INICIO);
        }
        return hasControleFluxo;
    }
    async save(cliente: Message, tipoFluxo: tipoFluxo): Promise<ControleFluxo> {
        let hasCliente = await this.clienteService.findOne(cliente)
        if (!hasCliente) {
            hasCliente = await this.clienteService.save(cliente);
        }
        const novoFluxo = this.controleFluxoRepository.create({
            tipoFluxo,
            cliente: hasCliente,
        });
        return await this.controleFluxoRepository.save(novoFluxo);
    }
    async update(cliente: Message,novoTipoFluxo: tipoFluxo): Promise<ControleFluxo> {
        const fluxo = await this.getFluxo(cliente);
        fluxo.tipoFluxo = novoTipoFluxo;
        return await this.controleFluxoRepository.save(fluxo);
    }
}
