import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Route {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    Path: string;
    
    @Column()
    method: string;

    @Column()
    handler: string;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    description: string; 
}