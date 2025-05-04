import { Cliente } from "src/models/clientes/clientes.entity";
import { EntidadeAuditavel } from "src/models/EntidadeAuditavel";
import { TipoFluxo } from "src/common/utils/tipoFluxo.util";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity("controle_fluxo")
export class ControleFluxo extends EntidadeAuditavel{
    @ManyToOne(() => Cliente, cliente => cliente.fluxo)
    cliente: Cliente;

    @Column({type: 'enum', enum: ["Inicio", "Cardapio", "Pedido", "FinalizarPedido"]})
    tipoFluxo: TipoFluxo;
}