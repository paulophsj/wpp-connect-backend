import { Injectable, OnModuleInit } from "@nestjs/common";
import { create } from "@wppconnect-team/wppconnect";


@Injectable()
export class WppService implements OnModuleInit {
    async onModuleInit() {
        const client = await create({
            session: 'sessionName',
            catchQR: (base64Qrimg, asciiQR, attempts, urlCode) => {
              console.log('Número de tentativas para ler o console qrcode: ', attempts);
              console.log('Código de terminal: ', asciiQR);
            }
        });
        client.onMessage(async (message) => {

        })
}}
