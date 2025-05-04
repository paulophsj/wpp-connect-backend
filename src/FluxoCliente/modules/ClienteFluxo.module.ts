import { Module } from "@nestjs/common";
import { SharedServices } from "src/common/modules/shared_services.module";
import { FluxoInicioService } from "../Inicio/FluxoInicio.service";

@Module({
  imports: [SharedServices],
  providers: [
    FluxoInicioService
  ],
  exports: [FluxoInicioService]
})
export class ClienteFluxoModule {}
