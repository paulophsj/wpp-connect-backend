import { Injectable } from "@nestjs/common";
import { Message } from "@wppconnect-team/wppconnect";
import { clienteStatusService } from "./clienteStatusService";
import { ClientesService } from "src/models/clientes/clientes.service";

@Injectable()
export class fluxoCliente {
    constructor(
        private clienteStatusService: clienteStatusService,
        private clienteService: ClientesService
    ){}

    async startChat(cliente: Message){
        const statusCliente = await this.clienteStatusService.getStatusCliente(cliente)
        console.log(statusCliente)
    }
}