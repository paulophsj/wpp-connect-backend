import { Injectable } from "@nestjs/common";
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

    async getStatusCliente(telefone:string): Promise<tipoStatus>{
        const hasClient = this.cliente[telefone]
        if(!hasClient){
            const getFluxo = await this.controleFluxoService.getFluxo(telefone)
            this.cliente[telefone] = {tipoStatus: tipoFluxo.INICIO}
        }
        return hasClient
    }
    async setStatusCliente(telefone:string, status: tipoFluxo): Promise<tipoStatus>{
        await this.controleFluxoService.update(telefone, status)
        return this.cliente[telefone] = {tipoStatus: status}
    }
}