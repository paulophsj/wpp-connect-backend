import { Cardapio } from "src/cardapio/cardapio.entity";
import { Pedido } from "src/pedido/pedido.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("pedido_item")
export class PedidoItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: 1})
    quantidade: number;

    @ManyToMany(() => Pedido, pedido => pedido.itens)
    pedido: Pedido;

    @ManyToOne(() => Cardapio)
    cardapio: Cardapio;
}