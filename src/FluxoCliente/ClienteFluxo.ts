import { Injectable } from "@nestjs/common";
import { Message } from "@wppconnect-team/wppconnect";
import { ClientesService } from "src/models/clientes/clientes.service";
import { ClienteStatusService } from "./ClienteStatus.service";

@Injectable()
export class FluxoCliente {
    constructor(
        private clienteStatusService: ClienteStatusService,
        private clienteService: ClientesService
    ){}

    async startChat(cliente: Message){
        const statusCliente = await this.clienteStatusService.getStatusCliente(cliente)
        console.log(statusCliente)
    }
}