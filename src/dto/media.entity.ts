import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class MediaContent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  context: string;

  @Column('blob')
  binaryLogicalObject: Buffer;
}
