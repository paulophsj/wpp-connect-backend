import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ClienteStatusService } from "../services/clienteStatus.service";
import { Typing } from "src/common/decorators/Typing.decorator";
import { WhatsappUser } from "src/common/interfaces/whatsappUser.interface";
import { ClienteFluxoService } from "../services/clienteFluxo.service";
import { TipoFluxo } from "src/common/utils/tipoFluxo.util";

@Injectable()
export class FluxoCardapioService {
        constructor(
            private clienteStatusService: ClienteStatusService,
            @Inject(forwardRef(() => ClienteFluxoService))
            private clienteFluxoService: ClienteFluxoService

        ) { }
        @Typing()
        async iniciarFluxo(WhatsappUser: WhatsappUser){
            const {Cliente, Whatsapp} = WhatsappUser

            if(!await this.clienteStatusService.mensagemFoiEnviada(Cliente.from)){
                await Whatsapp.sendText(Cliente.from, "Esses são nossos campeões de vendas:")
                await Whatsapp.sendText(Cliente.from, "1️⃣ Smash Clássico – R$ 15,00\n2️⃣ Duplo Cheddar Bacon – R$ 18,00\n3️⃣ Crispy Chicken – R$ 20,00\n4️⃣ Veggie do Chef – R$ 22,00")
                
                this.clienteStatusService.marcarMensagem(Cliente.from, true)
            }
            else {
                switch(Cliente.body?.trim()){
                    case "1":
                        await Whatsapp.sendText(Cliente.from, "Você escolheu o melhor!")
                        await this.clienteStatusService.setStatusCliente(Cliente, TipoFluxo.PEDIDO)
                        break
                    default:
                        await Whatsapp.sendText(Cliente.from, "Desculpe, não consegui entender sua escolha.\nPor favor, selecione uma opção válida:")
                        await Whatsapp.sendText(Cliente.from, "1️⃣ Smash Clássico – R$ 15,00\n2️⃣ Duplo Cheddar Bacon – R$ 18,00\n3️⃣ Crispy Chicken – R$ 20,00\n4️⃣ Veggie do Chef – R$ 22,00")
                        return
                }
                await this.clienteStatusService.marcarMensagem(Cliente.from, false)
                return await this.clienteFluxoService.startChat(WhatsappUser)
            }
        }
}