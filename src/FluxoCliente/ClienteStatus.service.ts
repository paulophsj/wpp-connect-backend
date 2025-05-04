import { Injectable } from "@nestjs/common";
import { Message } from "@wppconnect-team/wppconnect";
import { TipoStatus } from "src/common/interfaces/TipoStatus.interface";
import { TipoStatusCliente } from "src/common/interfaces/TipoStatusCliente.interface";
import { ControleFluxoService } from "src/models/controle-fluxo/controleFluxo.service";
import { TipoFluxo } from "src/common/utils/TipoFluxo.util";

@Injectable()
export class ClienteStatusService {
    private cliente: TipoStatusCliente = {}

    constructor(
        private controleFluxoService: ControleFluxoService
    ){}

    async getStatusCliente(cliente: Message): Promise<TipoStatus>{
        const hasClient = this.cliente[cliente.from]
        if(!hasClient){
            const getFluxo = await this.controleFluxoService.getFluxo(cliente)
            return this.cliente[cliente.from] = {tipoStatus: getFluxo.tipoFluxo}
        }
        return hasClient
    }
    async setStatusCliente(cliente: Message, status: TipoFluxo): Promise<TipoStatus>{
        await this.controleFluxoService.update(cliente, status)
        return this.cliente[cliente.from] = {tipoStatus: status}
    }
}