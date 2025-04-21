import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { Cliente } from 'src/clientes/clientes.entity'; 
import { PedidoItem } from 'src/pedido-item/pedidoItem.entity';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente, cliente => cliente.pedidos)
  cliente: Cliente;

  @CreateDateColumn()
  data_pedido: Date;

  @Column({
    type: 'enum',
    enum: ['pendente', 'em preparo', 'enviado', 'finalizado', 'cancelado'],
    default: 'pendente',
  })
  status: string;

  @Column({ nullable: true, type: 'text' })
  observacoes: string;

  @Column({ nullable: true })
  ponto_carne: string;

  @Column({ default: false })
  combo: boolean;

  @OneToMany(() => PedidoItem, pedidoItem => pedidoItem.pedido)
  itens: PedidoItem[];
}