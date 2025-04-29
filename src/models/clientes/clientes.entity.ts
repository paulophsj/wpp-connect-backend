import { ControleFluxo } from "src/models/controle-fluxo/controleFluxo.entity";
import { Mensagem } from "src/models/mensagem/mensagem.entity";
import { Pedido } from "src/models/pedido/pedido.entity";
import { EntidadeAuditavel } from "src/utils/EntidadeAuditavel";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity('clientes')
export class Cliente extends EntidadeAuditavel{
    @Column()
    nome: string;

    @Column({nullable: true})
    telefone: string;

    @OneToMany(() => ControleFluxo, controlefluxo => controlefluxo.cliente)
    fluxo: ControleFluxo[];

    @OneToMany(() => Pedido, pedido => pedido.cliente)
    pedidos: Pedido[];

    @OneToMany(() => Mensagem, mensagem => mensagem.cliente)
    mensagens: Mensagem[];
}