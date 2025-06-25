import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepo: Repository<Game>,
  ) {}

  findAll(): Promise<Game[]> {
    return this.gameRepo.find();
  }

  create(gameData: Partial<Game>): Promise<Game> {
    const newGame = this.gameRepo.create(gameData);
    return this.gameRepo.save(newGame);
  }

  delete(id: number): Promise<void> {
    return this.gameRepo.delete(id).then(() => {});
  }
}
