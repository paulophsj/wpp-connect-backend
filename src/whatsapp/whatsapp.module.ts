import { Module } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { AppService } from 'src/app.service';
import { SharedServices } from 'src/shared/shared_services.module';

@Module({
  imports: [SharedServices],
  providers: [
    AppService,
    WhatsappService,
  ],
})
export class WhatsappModule {}
