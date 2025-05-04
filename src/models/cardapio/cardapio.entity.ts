import { EntidadeAuditavel } from "src/models/EntidadeAuditavel";
import { Column, Entity } from "typeorm";

@Entity("cardapio")
export class Cardapio extends EntidadeAuditavel{
    @Column({length: 100})
    nome: string;

    @Column({ type: 'enum', enum: ["hamburguer", "acompanhamento", "bebida"] })
    categoria: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    preco: number;

    @Column({ type: 'text', nullable: true })
    descricao: string;
}