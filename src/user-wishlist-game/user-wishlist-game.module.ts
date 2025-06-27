import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserWishlistGame } from './user-wishlist-game.entity';
import { UserWishlistGameService } from './user-wishlist-game.service';
import { UserWishlistGameController } from './user-wishlist-game.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserWishlistGame])],
  providers: [UserWishlistGameService],
  controllers: [UserWishlistGameController],
  exports: [UserWishlistGameService],
})
export class UserWishlistGameModule {}
