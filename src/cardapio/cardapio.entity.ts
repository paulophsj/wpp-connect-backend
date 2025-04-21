import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cardapio")
export class Cardapio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    nome: string;

    @Column({ type: 'enum', enum: ["hamburguer", "acompanhamento", "bebida"] })
    categoria: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    preco: number;

    @Column({ type: 'text', nullable: true })
    descricao: string;
}