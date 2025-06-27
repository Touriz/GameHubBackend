import { Controller, Get, Param } from '@nestjs/common';
import { UserWishlistGameService } from './user-wishlist-game.service';

@Controller('users/:userId/wishlist')
export class UserWishlistGameController {
  constructor(private readonly wishlistService: UserWishlistGameService) {}

  @Get()
  async getWishlist(@Param('userId') userId: number) {
    return this.wishlistService.getWishlistByUserId(+userId);
  }
}
