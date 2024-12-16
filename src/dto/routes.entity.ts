import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Route {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    path: string;

    @Column()
    filePath: string;
    
    @Column()
    method: string;

    @Column()
    handler: string;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    description: string; 
}