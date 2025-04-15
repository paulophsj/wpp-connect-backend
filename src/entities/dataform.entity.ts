import { Column } from "typeorm";

export abstract class dataForm {
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}