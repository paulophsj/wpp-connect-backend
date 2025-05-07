import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ClienteStatusService } from "../services/clienteStatus.service";
import { WhatsappUser } from "src/common/interfaces/whatsappUser.interface";
import { TipoFluxo } from "src/common/utils/tipoFluxo.util";
import { Typing } from "src/common/decorators/Typing.decorator";
import { ClienteFluxoService } from "../services/clienteFluxo.service";
import { MensagemFluxoService } from "src/models/mensagem-fluxo/mensagemFluxo.service";
import { MensagemFluxo } from "src/models/mensagem-fluxo/mensagemFluxo.entity";

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
        const todasMensagens: MensagemFluxo[] = await this.mensagemFluxoService.getAll()

        if (!await this.clienteStatusService.mensagemFoiEnviada(Cliente.from)) {
            for(const mensagem of todasMensagens.filter(elemento => elemento.step == TipoFluxo.INICIO)){
                await Whatsapp.sendText(Cliente.from, mensagem.mensagem.replace('{NOME_CLIENTE}', Cliente.sender.pushname?.split(" ")[0] as string))
            }
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
                    await Whatsapp.sendText(Cliente.from, todasMensagens.find(elemento => elemento.isOption == true && elemento.step == TipoFluxo.INICIO)?.mensagem as string)
                    return
            }
            await this.clienteStatusService.marcarMensagem(Cliente.from, false)
            return await this.clienteFluxoService.startChat(WhatsappUser)
        }
    }
}