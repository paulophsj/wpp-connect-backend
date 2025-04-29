import { Injectable } from "@nestjs/common";
import { Message } from "@wppconnect-team/wppconnect";
import { ClientesService } from "src/models/clientes/clientes.service";
import { tipoFluxo } from "src/utils/tipoFluxo";

interface Sessao {
    tipoFluxo: tipoFluxo
}
interface SessionNumber {
    [key: string]: Sessao
}

const sessoesNumeros: SessionNumber = {}

@Injectable()
export class fluxoCliente {
    constructor(
        private clienteService: ClientesService
    ){}

    async startChat(cliente: Message){
        try {
            if(!sessoesNumeros[cliente.from]){
                sessoesNumeros[cliente.from] = {tipoFluxo: tipoFluxo.Inicio};
                //await this.clienteService.checkAndCreateClient(cliente);
            }
            console.log("sessoesNumeros atualizado:", sessoesNumeros);
        } catch (err) {
            console.error("Erro no startChat:", err);
        }
    }
}