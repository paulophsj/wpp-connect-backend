import { Pedido } from "src/pedido/pedido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({nullable: true})
    telefone: string;

    @OneToMany(() => Pedido, pedido => pedido.cliente)
    pedidos: Pedido[];
}