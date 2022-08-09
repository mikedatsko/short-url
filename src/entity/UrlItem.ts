import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UrlItem {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column('text', { nullable: false })
  original: URL | undefined;

  @Column('text', { nullable: true })
  short: string | undefined;
}
