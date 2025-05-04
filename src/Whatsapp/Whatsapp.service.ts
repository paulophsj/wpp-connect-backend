import { Injectable } from '@nestjs/common';
import { create, Whatsapp } from '@wppconnect-team/wppconnect';

@Injectable()
export class WhatsappService {
  protected WhatsappCliente: Whatsapp
  constructor() {}
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
            console.log('Deu certo a conexão')
        }
    })
  }
}
