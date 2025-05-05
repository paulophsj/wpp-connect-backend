import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Mensagem } from "./mensagem.entity";
import { ClientesService } from "../clientes/clientes.service";
import { Message } from "@wppconnect-team/wppconnect";

@Injectable()
export class MensagemService {
    constructor(
        @InjectRepository(Mensagem)
        private mensagemRepository: Repository<Mensagem>,
        
        private clienteService: ClientesService
    ){}
    public async save(cliente: Message, mensagem: string): Promise<Mensagem>{
        const findClient = await this.clienteService.findOne(cliente)

        const newMessage = this.mensagemRepository.create({
            mensagem,
            cliente: findClient
        })
        return await this.mensagemRepository.save(newMessage)
    }
}