import { Test, TestingModule } from '@nestjs/testing';
import { UserWishlistGameService } from './user-wishlist-game.service';

describe('UserWishlistGameService', () => {
  let service: UserWishlistGameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserWishlistGameService],
    }).compile();

    service = module.get<UserWishlistGameService>(UserWishlistGameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
