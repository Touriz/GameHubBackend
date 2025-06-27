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

  @Column({ default: false })
  singlePlayer: boolean;

  @Column({ default: false })
  localMultiplayer: boolean;

  @Column('numeric', { nullable: true })
  rating: number;

  @Column('simple-array', { nullable: true })
  language: string[];

  @Column({ default: false })
  dlcAvailable: boolean;

  @Column({ default: false })
  vrSupport: boolean;

  @Column({ default: false })
  achievements: boolean;

  @Column({ default: false })
  mods: boolean;

  @Column({ nullable: true })
  franchise: string;
}
