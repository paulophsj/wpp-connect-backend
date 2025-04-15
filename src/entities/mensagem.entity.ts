import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { dataForm } from './dataform.entity';

@Entity()
export class Mensagem extends dataForm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: string;

  @Column()
  mensagem: string;
}
