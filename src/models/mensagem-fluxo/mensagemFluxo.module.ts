import { Module } from "@nestjs/common";
import { MensagemFluxoController } from "./mensagemFluxo.controller";
import { MensagemFluxoService } from "./mensagemFluxo.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MensagemFluxo } from "./mensagemFluxo.entity";

@Module({
    imports: [TypeOrmModule.forFeature([MensagemFluxo])],
    providers: [MensagemFluxoService],
    controllers: [MensagemFluxoController]
})
export class MensagemFluxoModule{}