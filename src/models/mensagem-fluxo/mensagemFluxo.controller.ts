import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MensagemFluxoService } from "./mensagemFluxo.service";
import { MensagemFluxo } from "./mensagemFluxo.entity";
import { TipoFluxo } from "src/common/utils/tipoFluxo.util";

@Controller('mensagem-fluxo')
export class MensagemFluxoController{
    constructor(
        private readonly mensagemFluxoService: MensagemFluxoService
    ){}
    @Get()
    async getAll(): Promise<MensagemFluxo[]>{
        return await this.mensagemFluxoService.getAll()
    }
    @Get('/find/:tipoFluxo')
    async findByStep(@Param('tipoFluxo')tipoFluxo: TipoFluxo): Promise<MensagemFluxo[]>{
        return await this.mensagemFluxoService.getByStep(tipoFluxo)
    }
    @Post('/create')
    async create(@Body() mensagemFluxo: MensagemFluxo): Promise<MensagemFluxo>{
        return await this.mensagemFluxoService.create(mensagemFluxo)
    }
    @Put('/update/:id')
    async update(@Param('id') id: number, @Body() mensagemFluxo: MensagemFluxo): Promise<MensagemFluxo>{
        return await this.mensagemFluxoService.update(id, mensagemFluxo)
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: number): Promise<void>{
        return await this.mensagemFluxoService.delete(id)
    }
}