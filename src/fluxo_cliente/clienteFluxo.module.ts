import { Module } from "@nestjs/common";
import { SharedServices } from "src/shared/shared_services.module";
import { ClienteMensagensService } from "./services/clienteMensagens.service";

@Module({
  imports: [SharedServices],
  providers: [
    ClienteMensagensService
  ],
  exports: [ClienteMensagensService]
})
export class ClienteFluxoModule {}
