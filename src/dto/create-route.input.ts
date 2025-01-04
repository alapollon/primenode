import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Represents the input required to create api route.
 */
@Entity()
export class RouteInput {
  @PrimaryGeneratedColumn()
  uuid: number;

  @Column()
  name: string;

  @Column()
  filePath: string;

  @Column()
  uri: string; 

  @Column()
  date_created: string; 

}