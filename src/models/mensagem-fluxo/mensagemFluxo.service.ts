import { Injectable, NotFoundException, OnModuleInit } from "@nestjs/common";
import { MensagemFluxo } from "./mensagemFluxo.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { TipoFluxo } from "src/common/utils/tipoFluxo.util";

@Injectable()
export class MensagemFluxoService implements OnModuleInit{
    private todasMensagens: MensagemFluxo[] = []
    constructor(
        @InjectRepository(MensagemFluxo)
        private mensagemRepository: Repository<MensagemFluxo>
    ){}
    async onModuleInit() {
        this.todasMensagens = await this.getAll()
    }
    async getAll(): Promise<MensagemFluxo[]>{
        if(this.todasMensagens.length > 0){
            return this.todasMensagens
        }
        return this.todasMensagens = await this.mensagemRepository.find()

    }
    async getByStep(tipoFluxo: TipoFluxo): Promise<MensagemFluxo[]>{
        const findByStep = await this.mensagemRepository.find({where: {step: tipoFluxo}})
        if(!findByStep){
            throw new NotFoundException('Não foi possível localizar nenhuma mensagem com esse step.')
        }
        return findByStep
    }
    async create(mensagemFluxo: Partial<MensagemFluxo>): Promise<MensagemFluxo>{
        const novaMensagem = this.mensagemRepository.create({
            mensagem: mensagemFluxo.mensagem,
            isOption: mensagemFluxo.isOption,
            step: mensagemFluxo.step
        })
        return await this.mensagemRepository.save(novaMensagem)
    }
    async update(id: number, mensagemFluxo: MensagemFluxo): Promise<MensagemFluxo>{
        const procurarMensagem = await this.mensagemRepository.findOne({where: {id}})
        if(!procurarMensagem){
            throw new NotFoundException("Mensagem não encontrada")
        }
        procurarMensagem.mensagem = mensagemFluxo.mensagem
        procurarMensagem.isOption = mensagemFluxo.isOption

        return await this.mensagemRepository.save(procurarMensagem)
    }
    async delete(id: number): Promise<void>{
        const procurarMensagem = await this.mensagemRepository.findOne({where: {id}})
        if(!procurarMensagem){
            throw new NotFoundException("Mensagem não encontrada")
        }
        await this.mensagemRepository.remove(procurarMensagem)
    }
}