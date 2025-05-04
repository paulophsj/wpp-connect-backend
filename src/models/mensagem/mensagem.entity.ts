import { Cliente } from "src/models/clientes/clientes.entity";
import { EntidadeAuditavel } from "src/models/EntidadeAuditavel";
import { Column, CreateDateColumn, Entity, ManyToOne } from "typeorm";

@Entity("mensagem")
export class Mensagem extends EntidadeAuditavel{
    @ManyToOne(() => Cliente, cliente => cliente.mensagens)
    cliente: Cliente;

    @Column('text')
    mensagem: string;

    @Column('text',{nullable: true})
    resposta: string;

    @CreateDateColumn()
    data_envio: Date;
}