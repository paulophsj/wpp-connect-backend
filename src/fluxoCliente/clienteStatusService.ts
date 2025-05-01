import { Injectable } from "@nestjs/common";
import { Message } from "@wppconnect-team/wppconnect";
import { tipoStatus } from "src/interfaces/tipoStatus";
import { tipoStatusCliente } from "src/interfaces/tipoStatusCliente";
import { ControleFluxoService } from "src/models/controle-fluxo/controleFluxo.service";
import { tipoFluxo } from "src/utils/tipoFluxo";

@Injectable()
export class clienteStatusService {
    private cliente: tipoStatusCliente = {}

    constructor(
        private controleFluxoService: ControleFluxoService
    ){}

    async getStatusCliente(cliente: Message): Promise<tipoStatus>{
        const hasClient = this.cliente[cliente.from]
        if(!hasClient){
            const getFluxo = await this.controleFluxoService.getFluxo(cliente)
            return this.cliente[cliente.from] = {tipoStatus: getFluxo.tipoFluxo}
        }
        return hasClient
    }
    async setStatusCliente(cliente: Message, status: tipoFluxo): Promise<tipoStatus>{
        await this.controleFluxoService.update(cliente, status)
        return this.cliente[cliente.from] = {tipoStatus: status}
    }
}