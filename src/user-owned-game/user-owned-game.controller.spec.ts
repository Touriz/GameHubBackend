import { Test, TestingModule } from '@nestjs/testing';
import { UserOwnedGameController } from './user-owned-game.controller';

describe('UserOwnedGameController', () => {
  let controller: UserOwnedGameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserOwnedGameController],
    }).compile();

    controller = module.get<UserOwnedGameController>(UserOwnedGameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
