/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
import { Game } from './game/game.entity';
import { UserModule } from './users/users.module';
import { User } from './users/users.entity';
import { UserWishlistGameModule } from './user-wishlist-game/user-wishlist-game.module';
import { UserOwnedGameModule } from './user-owned-game/user-owned-game.module';
import { AuthModule } from './auth/auth.module';
import { UserWishlistGame } from './user-wishlist-game/user-wishlist-game.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgres.kdacqycpgafhghquldqw:GamehubJuandiego@aws-0-eu-west-3.pooler.supabase.com:5432/postgres',
      entities: [Game, User, UserWishlistGame],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    GameModule,
    UserModule,
    UserWishlistGameModule,
    UserOwnedGameModule,
    AuthModule,
  ],
})
export class AppModule {}
