import { Injectable } from "@nestjs/common";
import { ClienteStatusService } from "./clienteStatus.service";
import { WhatsappUser } from "src/common/interfaces/whatsappUser.interface";
import { TipoFluxo } from "src/common/utils/TipoFluxo.util";

@Injectable()
export class ClienteMensagensService{
    constructor(
        private clienteStatusService: ClienteStatusService
    ){}
    async teste(WhatsappUser: WhatsappUser){
        this.clienteStatusService.setStatusCliente(WhatsappUser.Cliente, TipoFluxo.CARDAPIO)
    }
}