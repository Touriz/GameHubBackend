import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'games' })
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('numeric')
  price: number;

  @Column('simple-array')
  platform: string[];

  @Column()
  image_url: string;

  @Column()
  description: string;

  @Column()
  genre: string;

  @Column({ default: false })
  multiplayer: boolean;

  @Column({ default: false })
  storyMode: boolean;

  @Column({ default: false })
  coop: boolean;

  @Column('int', { nullable: true })
  releaseYear: number;

  @Column({ nullable: true })
  developer: string;

  @Column({ default: false })
  online: boolean;

  @Column({ default: false })
  freeToPlay: boolean;

  @Column({ default: false })
  crossplay: boolean;
}