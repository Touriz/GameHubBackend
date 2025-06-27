import { Test, TestingModule } from '@nestjs/testing';
import { UserOwnedGameService } from './user-owned-game.service';

describe('UserOwnedGameService', () => {
  let service: UserOwnedGameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserOwnedGameService],
    }).compile();

    service = module.get<UserOwnedGameService>(UserOwnedGameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
