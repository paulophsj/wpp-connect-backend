import { Injectable, OnModuleInit } from '@nestjs/common';
import { WhatsappService } from './Whatsapp/WhatsappService';

@Injectable()
export class AppService implements OnModuleInit{
  constructor(
    private WhatsappService: WhatsappService
  ){}
  async onModuleInit() {
      await this.WhatsappService.createConnection()
  }
}
