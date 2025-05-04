import { Injectable } from "@nestjs/common";
import { ClienteStatusService } from "./ClienteStatus.service";
import { TipoFluxo } from "src/common/utils/TipoFluxo.util";
import { FluxoInicioService } from "../Inicio/FluxoInicio.service";
import { WhatsappUser } from "src/common/interfaces/WhatsappUser.interface";


@Injectable()
export class ClienteFluxoService {
    constructor(
        private clienteStatusService: ClienteStatusService,
        private fluxoInicio: FluxoInicioService
    ) { }

    async startChat(WhatsappUser: WhatsappUser) {
        const statusCliente = await this.clienteStatusService.getStatusCliente(WhatsappUser.Cliente)
        console.log(statusCliente.tipoStatus)
        switch (statusCliente.tipoStatus) {
            case TipoFluxo.INICIO:
                this.fluxoInicio.teste(WhatsappUser)
        }
    }
}