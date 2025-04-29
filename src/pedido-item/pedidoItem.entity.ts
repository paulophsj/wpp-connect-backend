import { Cardapio } from "src/cardapio/cardapio.entity";
import { Pedido } from "src/pedido/pedido.entity";
import { EntidadeAuditavel } from "src/utils/EntidadeAuditavel";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("pedido_item")
export class PedidoItem extends EntidadeAuditavel{
    @Column({default: 1})
    quantidade: number;

    @ManyToMany(() => Pedido, pedido => pedido.itens)
    pedido: Pedido;

    @ManyToOne(() => Cardapio)
    cardapio: Cardapio;
}