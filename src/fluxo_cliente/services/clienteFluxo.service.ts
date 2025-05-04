import { Injectable } from "@nestjs/common";
import { TipoFluxo } from "src/common/utils/tipoFluxo.util";
import { FluxoInicioService } from "../inicio/fluxoInicio.service";
import { WhatsappUser } from "src/common/interfaces/whatsappUser.interface";
import { ClienteStatusService } from "./clienteStatus.service";
import { Typing } from "src/common/decorators/Typing.decorator";


@Injectable()
export class ClienteFluxoService {
    constructor(
        private clienteStatusService: ClienteStatusService,
        private fluxoInicio: FluxoInicioService
    ) { }

    @Typing()
    async startChat(WhatsappUser: WhatsappUser) {
        const statusCliente = await this.clienteStatusService.getStatusCliente(WhatsappUser.Cliente)
        console.log(statusCliente, WhatsappUser.Cliente.from)
        switch (statusCliente.tipoStatus) {
            case TipoFluxo.INICIO:
                return this.fluxoInicio.iniciarFluxo(WhatsappUser)
        }
    }
}