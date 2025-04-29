import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Mensagem } from "./mensagem.entity";
import { Cliente } from "src/models/clientes/clientes.entity";
import { ClientesService } from "src/models/clientes/clientes.service";

@Injectable()
export class MensagemService {
    constructor(
        @InjectRepository(Mensagem)
        private mensagemRepository: Repository<Mensagem>,
        
        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>
    ){}
    async save(clienteId: number, mensagem: string): Promise<Mensagem>{
        const cliente = await this.clienteRepository.findOne({where: {id: clienteId}})
        if(!cliente){
            throw new NotFoundException('Cliente não encontrado.')
        }
        const newMessage = this.mensagemRepository.create({
            cliente,
            mensagem
        })
        return await this.mensagemRepository.save(newMessage)
    }
}