import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


export class UsersActivityRecord{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    keytoken: string;

    @Column()
    dateAccessedBy: string;

    @Column()
    duration: string; 

    @Column()
    BrowserDepiction: string;

    @Column()
    Device: string;

}