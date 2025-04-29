import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ControleFluxo } from './controleFluxo.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/models/clientes/clientes.entity';

@Injectable()
export class ControleFluxoService {
    constructor(
        @InjectRepository(ControleFluxo)
        private controleFluxoRepository: Repository<ControleFluxo>,

        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>,
    ) { }

    async save(clienteId: number, tipoFluxo: string): Promise<ControleFluxo> {
        const cliente = await this.clienteRepository.findOne({
            where: { id: clienteId },
        });
        if (!cliente) {
            throw new NotFoundException('Cliente não encontrado.');
        }
        const createFluxo = this.controleFluxoRepository.create({
            cliente,
            tipoFluxo,
        });
        return await this.controleFluxoRepository.save(createFluxo);
    }
    async update(clienteId: number, novoTipoFluxo: string,): Promise<ControleFluxo | null> {
        const fluxo = await this.controleFluxoRepository.findOne({
            where: {
                cliente: { id: clienteId },
            },
            relations: ['cliente'],
        });
        if (!fluxo) {
            return null
        }
        fluxo.tipoFluxo = novoTipoFluxo;
        return this.controleFluxoRepository.save(fluxo);
    }
}
