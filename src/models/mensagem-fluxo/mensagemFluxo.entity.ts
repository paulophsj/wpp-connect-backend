import { Column, Entity } from "typeorm";
import { EntidadeAuditavel } from "../EntidadeAuditavel";
import { TipoFluxo } from "src/common/utils/tipoFluxo.util";

@Entity("mensagem_fluxo")
export class MensagemFluxo extends EntidadeAuditavel{
    @Column({type: 'text'})
    mensagem: string

    @Column({type: 'boolean',default: false})
    isOption: boolean

    @Column({type: 'enum', enum: TipoFluxo, nullable: false})
    step: TipoFluxo
}