import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("regiao_entrega")
export class RegiaoEntrega {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({type: 'decimal', precision: 5, scale: 2})
  taxa_entrega: number;
}