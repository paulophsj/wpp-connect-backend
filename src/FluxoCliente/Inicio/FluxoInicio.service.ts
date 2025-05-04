import { Injectable } from "@nestjs/common";
import { ClienteStatusService } from "../services/ClienteStatus.service";
import { WhatsappUser } from "src/common/interfaces/WhatsappUser.interface";

@Injectable()
export class FluxoInicioService{
    constructor(
        private ClienteStatusService: ClienteStatusService
    ){}
    async teste(WhatsappUser: WhatsappUser){
        if(this.ClienteStatusService.MensagemEnviada.get(WhatsappUser.Cliente.from) == undefined){
            this.ClienteStatusService.MensagemEnviada.set(WhatsappUser.Cliente.from, false)
        }
        if(this.ClienteStatusService.MensagemEnviada.get(WhatsappUser.Cliente.from) == false){
            await WhatsappUser.Whatsapp.sendText(WhatsappUser.Cliente.from, 'Olá!')
            await WhatsappUser.Whatsapp.sendText(WhatsappUser.Cliente.from, 'Isso é um teste.')
            return this.ClienteStatusService.MensagemEnviada.set(WhatsappUser.Cliente.from, true)
        }
        if(this.ClienteStatusService.MensagemEnviada.get(WhatsappUser.Cliente.from) == true){
            return console.log('O cliente já recebeu mensagens.')
        }
    }
}