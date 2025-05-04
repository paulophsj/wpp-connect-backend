import { Module } from "@nestjs/common";
import { SharedServices } from "src/shared/shared_services.module";
import { FluxoInicioService } from "src/fluxo_cliente/inicio/fluxoInicio.service"; 

@Module({
  imports: [SharedServices],
  providers: [
    FluxoInicioService
  ],
  exports: [FluxoInicioService]
})
export class ClienteFluxoModule {}
