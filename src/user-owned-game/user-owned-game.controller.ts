import { Controller, Get, Param } from '@nestjs/common';
import { UserOwnedGameService } from './user-owned-game.service';

@Controller('users/:userId/owned')
export class UserOwnedGameController {
  constructor(private readonly ownedService: UserOwnedGameService) {}

  @Get()
  async getOwnedGames(@Param('userId') userId: number) {
    return this.ownedService.getOwnedGamesByUserId(+userId);
  }
}
