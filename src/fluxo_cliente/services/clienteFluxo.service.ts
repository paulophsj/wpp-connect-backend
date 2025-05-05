import { Injectable } from "@nestjs/common";
import { TipoFluxo } from "src/common/utils/tipoFluxo.util";
import { FluxoInicioService } from "../inicio/fluxoInicio.service";
import { WhatsappUser } from "src/common/interfaces/whatsappUser.interface";
import { ClienteStatusService } from "./clienteStatus.service";
import { Typing } from "src/common/decorators/Typing.decorator";
import { MensagemService } from "src/models/mensagem/mensagem.service";


@Injectable()
export class ClienteFluxoService {
    constructor(
        private clienteStatusService: ClienteStatusService,
        private mensagemService: MensagemService,
        private fluxoInicio: FluxoInicioService
    ) { }

    @Typing()
    async startChat(WhatsappUser: WhatsappUser) {
        const statusCliente = await this.clienteStatusService.getStatusCliente(WhatsappUser.Cliente)

        //Salva a mensagem recebida do cliente
        await this.mensagemService.save(WhatsappUser.Cliente, WhatsappUser.Cliente.body?.trim() as string)
        
        switch (statusCliente.tipoStatus) {
            case TipoFluxo.INICIO:
                return this.fluxoInicio.iniciarFluxo(WhatsappUser)
        }
    }
}