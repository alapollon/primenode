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
    landingurl: string;

    @Column()
    linkedinurl: string; 

    @Column()
    xdoturl: string; 

    @Column()
    advertisementIdentity: string;



}