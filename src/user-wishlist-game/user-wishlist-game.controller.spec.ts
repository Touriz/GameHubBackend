import { Test, TestingModule } from '@nestjs/testing';
import { UserWishlistGameController } from './user-wishlist-game.controller';

describe('UserWishlistGameController', () => {
  let controller: UserWishlistGameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserWishlistGameController],
    }).compile();

    controller = module.get<UserWishlistGameController>(
      UserWishlistGameController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
