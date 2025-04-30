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
    async getFluxo(telefone: string): Promise<ControleFluxo | null>{
        const hasControle = await this.controleFluxoRepository.findOne({where: {cliente: {telefone: telefone}}})
        if(!hasControle){
            return null
        }
        return hasControle
    }
    async save(telefone: string, tipoFluxo: string): Promise<ControleFluxo | null> {
        const cliente = await this.clienteRepository.findOne({
            where: { telefone: telefone },
        });
        if(!cliente){
            return null
        }
        const novoFluxo = this.controleFluxoRepository.create({
            cliente,
            tipoFluxo
        })
        return await this.controleFluxoRepository.save(novoFluxo)
    }
    async update(telefone: string, novoTipoFluxo: string,): Promise<ControleFluxo | null> {
        const fluxo = await this.controleFluxoRepository.findOne({
            where: {
                cliente: { telefone: telefone },
            },
            relations: ['cliente'],
        });
        if (!fluxo) {
            return null
        }
        fluxo.tipoFluxo = novoTipoFluxo;
        return await this.controleFluxoRepository.save(fluxo);
    }
}
