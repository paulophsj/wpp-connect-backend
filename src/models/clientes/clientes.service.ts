import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './clientes.entity';
import { Message } from '@wppconnect-team/wppconnect';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) { }

  async checkAndCreateClient(cliente: Message): Promise<Cliente> {
    const hasClient = await this.clientesRepository.findOne({ where: { telefone: cliente.from } })
    if (!hasClient) {
      const newCliente: Partial<Cliente> = this.clientesRepository.create({
        nome: cliente.sender.pushname,
        telefone: cliente.from
      })
      return await this.clientesRepository.save(newCliente)
    }
    throw new ConflictException(`O usuário já está cadastrado.`)
  }
}
