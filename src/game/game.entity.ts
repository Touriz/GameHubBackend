import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'games' }) // Coincide con tu tabla en Supabase
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('numeric')
  price: number;

  @Column()
  platform: string;

  @Column()
  image_url: string;

  @Column()
  description: string;
}
