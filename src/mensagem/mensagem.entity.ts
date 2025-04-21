import { Cliente } from "src/clientes/clientes.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("mensagem")
export class Mensagem{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cliente, cliente => cliente.mensagens)
    cliente: Cliente;

    @Column('text')
    mensagem: string;

    @Column('text')
    resposta: string;

    @CreateDateColumn()
    data_envio: Date;
}