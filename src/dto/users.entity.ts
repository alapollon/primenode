import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


export class UsersActivity{
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