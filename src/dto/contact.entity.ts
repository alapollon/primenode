import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/*
 * this class is for the contact database 
 * 
 */

@Entity()
export class ContactRecord {
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
    cellNumber: string;

    @Column()
    landingurl: string;

    @Column()
    linkedinurl: string; 

    @Column()
    xdoturl: string; 

    @Column()
    facebookurl: string; 

    @Column()
    advertisementIdentity: string;



}