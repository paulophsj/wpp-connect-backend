import { Injectable } from "@nestjs/common";
import { ClienteStatusService } from "../services/clienteStatus.service"; 
import { WhatsappUser } from "src/common/interfaces/whatsappUser.interface";
import { TipoFluxo } from "src/common/utils/tipoFluxo.util";
import { Typing } from "src/common/decorators/Typing.decorator";

@Injectable()
export class FluxoInicioService {
    constructor(
        private clienteStatusService: ClienteStatusService
    ){}
    @Typing()
    async iniciarFluxo(WhatsappUser: WhatsappUser){
        const {Cliente, Whatsapp} = WhatsappUser

        if(!await this.clienteStatusService.mensagemFoiEnviada(Cliente.from)){
            await Whatsapp.sendText(Cliente.from, `Olá, ${Cliente.sender.pushname}! Seja bem-vindo(a) à NP Burger – Hambúrguer Artesanal de Verdade!`)
            await this.clienteStatusService.marcarMensagemComoEnviada(Cliente.from)
        }
        if(await this.clienteStatusService.mensagemFoiEnviada(Cliente.from)){
            switch (Cliente.body?.trim()){
                case "2":
                    return this.clienteStatusService.setStatusCliente(Cliente, TipoFluxo.CARDAPIO)
                default:
                    await Whatsapp.sendText(Cliente.from, "Como podemos te ajudar hoje? Escolha uma das opções abaixo:")
                    return await Whatsapp.sendText(Cliente.from, "1️⃣ Fazer um pedido\n2️⃣ Ver o cardápio completo\n3️⃣ Falar com um atendente\n4️⃣ Avaliar nosso atendimento\n5️⃣ Informações sobre entrega")
            }
        }
    }
}