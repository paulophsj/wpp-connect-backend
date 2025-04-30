import { Injectable } from "@nestjs/common";
import { Message } from "@wppconnect-team/wppconnect";
import { clienteStatusService } from "./clienteStatusService";
import { ClientesService } from "src/models/clientes/clientes.service";
import { tipoFluxo } from "src/utils/tipoFluxo";

@Injectable()
export class fluxoCliente {
    constructor(
        private clienteStatusService: clienteStatusService,
        private clienteService: ClientesService
    ){}

    async startChat(cliente: Message){

    }
}