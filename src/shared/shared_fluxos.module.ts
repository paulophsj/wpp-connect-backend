import { Module } from "@nestjs/common";
import { SharedServices } from "src/shared/shared_services.module";
import { FluxoInicioService } from "src/fluxo_cliente/inicio/fluxoInicio.service"; 
import { FluxoCardapioService } from "src/fluxo_cliente/cardapio/fluxoCardapio.service";

@Module({
  imports: [SharedServices],
  providers: [
    FluxoInicioService,
    FluxoCardapioService,
  ],
  exports: [FluxoInicioService, FluxoCardapioService]
})
export class ClienteFluxoModule {}
