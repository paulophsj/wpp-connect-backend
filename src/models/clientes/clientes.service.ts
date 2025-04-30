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
    private controleFluxoService: ControleFluxoService
  ) { }

  async checkAndCreateClient(cliente: Message): Promise<Cliente | ControleFluxo | null> {
    const hasClient = await this.clientesRepository.findOne({ where: { telefone: cliente.from } })
    if (!hasClient) {
      const newCliente: Partial<Cliente> = this.clientesRepository.create({
        nome: cliente.sender.pushname,
        telefone: cliente.from
      })
      const novoCliente = await this.clientesRepository.save(newCliente)
      await this.controleFluxoService.save(cliente.from, tipoFluxo.INICIO) //Cria um fluxo após o usuário se cadastrar
      return novoCliente
    }
    return null
  }
}
