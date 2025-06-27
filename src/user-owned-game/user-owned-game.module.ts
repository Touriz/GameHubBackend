import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOwnedGame } from './user-owned-game.entity';
import { UserOwnedGameController } from './user-owned-game.controller';
import { UserOwnedGameService } from './user-owned-game.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserOwnedGame])],
  controllers: [UserOwnedGameController],
  providers: [UserOwnedGameService],
})
export class UserOwnedGameModule {}
