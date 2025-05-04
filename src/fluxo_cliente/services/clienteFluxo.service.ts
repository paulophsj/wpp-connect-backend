import { Injectable } from "@nestjs/common";
import { TipoFluxo } from "src/common/utils/TipoFluxo.util";
import { ClienteMensagensService } from "./clienteMensagens.service";
import { WhatsappUser } from "src/common/interfaces/whatsappUser.interface";
import { ClienteStatusService } from "./clienteStatus.service";


@Injectable()
export class ClienteFluxoService {
    constructor(
        private clienteStatusService: ClienteStatusService,
        private fluxoInicio: ClienteMensagensService
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