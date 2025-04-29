import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './clientes.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) {}

  async findByNumber(telefone: string): Promise<Cliente> {
    const cliente = await this.clientesRepository.findOne({
      where: { telefone: telefone },
    });
    if(!cliente){
      throw new NotFoundException(`Cliente não localizado.`)
    }
    return cliente;
  }
  async save(cliente: Partial<Cliente>): Promise<Cliente> {
    const newCliente = await this.clientesRepository.create(cliente);
    return await this.clientesRepository.save(newCliente);
  }
}
