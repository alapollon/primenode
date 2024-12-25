import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


export class UsersActivityRecord{
    @Column()
    who: string;

    @Column()
    internetProtocoluri: string;

    @Column()
    dateAccessedBy: string;

    @Column()
    duration: string; 

    @Column()
    BrowserDepiction: string;

    @Column()
    Device: string;

}