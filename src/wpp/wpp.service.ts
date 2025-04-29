import { Injectable, OnModuleInit } from '@nestjs/common';
import { create, Whatsapp } from '@wppconnect-team/wppconnect';
import { fluxoCliente } from 'src/fluxoCliente/fluxoCliente';

@Injectable()
export class WppService implements OnModuleInit {
  constructor(
    private fluxoCliente: fluxoCliente
  ){}
  async onModuleInit() {
    const client = await this.initializeClient();
    this.clientMessage(client);
  }

  //Inicializa o WhatsApp

  private async initializeClient() {
    const client = await create({
      session: 'sessionName',
      catchQR: (base64Qrimg, asciiQR, attempts, urlCode) => {
        console.log(
          'Número de tentativas para ler o console qrcode: ',
          attempts,
        );
        console.log('Código de terminal: ', asciiQR);
      },
    });
    return client;
  }

  //Inicia as mensagens que o usuário recebe

  private async clientMessage(client: Whatsapp) {
    client.onMessage(async (message) => {
      if(!message.isGroupMsg){
        this.fluxoCliente.startChat(message)
      }
    });
  }
}
