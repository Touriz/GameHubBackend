import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserWishlistGame } from './user-wishlist-game.entity';

@Injectable()
export class UserWishlistGameService {
  constructor(
    @InjectRepository(UserWishlistGame)
    private readonly wishlistRepo: Repository<UserWishlistGame>,
  ) {}

  async getWishlistByUserId(userId: number) {
    const wishlist = await this.wishlistRepo.find({
      where: { userId },
      relations: ['game'],
    });
    return wishlist.map((entry) => entry.game);
  }
}
