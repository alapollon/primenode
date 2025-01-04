import { PrimaryColumn, Column,  } from "typeorm";



export class FileStore{
    @PrimaryColumn()
    uuid: string

    @Column()
    filename: string

    @Column()
    origin: string 

    @Column()
    update: string

    @Column()
    signature: string

    @Column()
    symbol: string 




}