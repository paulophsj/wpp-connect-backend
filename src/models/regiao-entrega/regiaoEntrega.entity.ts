import { EntidadeAuditavel } from "src/common/utils/EntidadeAuditavel.util";
import { Column, Entity } from "typeorm";

@Entity("regiao_entrega")
export class RegiaoEntrega extends EntidadeAuditavel{
  @Column()
  nome: string;

  @Column({type: 'decimal', precision: 5, scale: 2})
  taxa_entrega: number;
}