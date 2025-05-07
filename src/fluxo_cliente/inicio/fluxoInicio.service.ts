import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ClienteStatusService } from "../services/clienteStatus.service";
import { WhatsappUser } from "src/common/interfaces/whatsappUser.interface";
import { TipoFluxo } from "src/common/utils/tipoFluxo.util";
import { Typing } from "src/common/decorators/Typing.decorator";
import { ClienteFluxoService } from "../services/clienteFluxo.service";
import { MensagemFluxoService } from "src/models/mensagem-fluxo/mensagemFluxo.service";

@Injectable()
export class FluxoInicioService {
    constructor(
        private clienteStatusService: ClienteStatusService,
        @Inject(forwardRef(() => ClienteFluxoService))
        private clienteFluxoService: ClienteFluxoService,

        private mensagemFluxoService: MensagemFluxoService
    ) { }
    @Typing()
    async iniciarFluxo(WhatsappUser: WhatsappUser) {
        const { Cliente, Whatsapp } = WhatsappUser

        if (!await this.clienteStatusService.mensagemFoiEnviada(Cliente.from)) {
            await Whatsapp.sendText(Cliente.from, `Olá, ${Cliente.sender.pushname}! Seja bem-vindo(a) à NP Burger – Hambúrguer Artesanal de Verdade!`)
            await Whatsapp.sendText(Cliente.from, "Como podemos te ajudar hoje? Escolha uma das opções abaixo:")
            await Whatsapp.sendText(Cliente.from, "1️⃣ Fazer um pedido\n2️⃣ Ver o cardápio completo\n3️⃣ Falar com um atendente\n4️⃣ Avaliar nosso atendimento\n5️⃣ Informações sobre entrega")
            await this.clienteStatusService.marcarMensagem(Cliente.from, true)
            return
        }
        else {
            switch (Cliente.body?.trim()) {
                case "2":
                    await Whatsapp.sendText(Cliente.from, "Claro! Vou te mostrar as melhores opções ;)")
                    await this.clienteStatusService.setStatusCliente(Cliente, TipoFluxo.CARDAPIO)
                    break
                default:
                    await Whatsapp.sendText(Cliente.from, "Poxa... Não consegui entender sua resposta.\nPor favor, selecione uma opção válida: ")
                    await Whatsapp.sendText(Cliente.from, "1️⃣ Fazer um pedido\n2️⃣ Ver o cardápio completo\n3️⃣ Falar com um atendente\n4️⃣ Avaliar nosso atendimento\n5️⃣ Informações sobre entrega")
                    return
            }
            await this.clienteStatusService.marcarMensagem(Cliente.from, false)
            return await this.clienteFluxoService.startChat(WhatsappUser)
        }
    }
}