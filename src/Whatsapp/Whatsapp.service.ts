import { Injectable } from '@nestjs/common';
import { create, Whatsapp } from '@wppconnect-team/wppconnect';
import { ClienteFluxoService } from 'src/FluxoCliente/services/ClienteFluxo.service';

@Injectable()
export class WhatsappService {
  private WhatsappCliente: Whatsapp
  constructor(
    private ClienteFluxo: ClienteFluxoService
  ) {}
  async createConnection(): Promise<void> {
    this.WhatsappCliente = await create({
      session: 'sessionName',
      catchQR: (base64Qrimg, asciiQR, attempts, urlCode) => {
        console.log(
          'Número de tentativas para ler o console qrcode: ',
          attempts,
        );
        console.log('Código de terminal:  \n', asciiQR);
      },
    })
    return this.startClientChat(this.WhatsappCliente)
  }

  private async startClientChat(cliente: Whatsapp){
    cliente.onMessage(async (message) => {
        if(!message.isGroupMsg){
            this.ClienteFluxo.startChat({Cliente: message, Whatsapp: cliente})
        }
    })
  }
}
