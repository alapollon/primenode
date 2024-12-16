import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/*
 * this class property material is for pos blockchain automations,
 * social platform interactivity and end-point intelligence 
 * 
 */

@Entity()
export class Clientele {
    // fix 
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    macaddress: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    @Column()
    cmurl: string;

    @Column()
    url: string; 

    @Column()
    advertisementIdentity: string;


}