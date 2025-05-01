import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './clientes.entity';
import { Message } from '@wppconnect-team/wppconnect';
import { ControleFluxoService } from '../controle-fluxo/controleFluxo.service';
import { tipoFluxo } from 'src/utils/tipoFluxo';
import { ControleFluxo } from '../controle-fluxo/controleFluxo.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) { }

  async findOne(cliente: Message): Promise<Cliente> {
    const hasCliente = await this.clientesRepository.findOne({where: {telefone: cliente.from}})
    if(!hasCliente){
      return this.save(cliente)
    }
    return hasCliente
  }
  async save(cliente: Message): Promise<Cliente> {
    const newCliente: Partial<Cliente> = this.clientesRepository.create({
      nome: cliente.sender.pushname,
      telefone: cliente.from
    })
    return await this.clientesRepository.save(newCliente)
  }
}
