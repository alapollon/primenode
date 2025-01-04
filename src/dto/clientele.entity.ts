import { Column, Entity,  } from "typeorm";

export default class ClienteleRecord {
    @Column()
    macaddress: string;

    @Column()
    IPorigin: string;

    @Column()
    IPdestination: string;

    @Column() 
    Zone: string; 

    
}