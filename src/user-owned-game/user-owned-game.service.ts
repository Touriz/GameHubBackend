import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserOwnedGame } from './user-owned-game.entity';

@Injectable()
export class UserOwnedGameService {
  constructor(
    @InjectRepository(UserOwnedGame)
    private readonly ownedRepo: Repository<UserOwnedGame>,
  ) {}

  async getOwnedGamesByUserId(userId: number) {
    const owned = await this.ownedRepo.find({
      where: { userId },
      relations: ['game'],
    });
    return owned.map((entry) => entry.game);
  }
}
