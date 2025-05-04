import { Module } from '@nestjs/common';
import { WhatsappService } from './Whatsapp.service';
import { AppService } from 'src/app.service';
import { SharedServices } from 'src/common/modules/shared_services.module';

@Module({
  imports: [SharedServices],
  providers: [
    AppService,
    WhatsappService,
  ],
})
export class WhatsappModule {}
