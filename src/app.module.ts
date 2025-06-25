import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
import { Game } from './game/game.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgres.kdacqycpgafhghquldqw:GamehubJuandiego@aws-0-eu-west-3.pooler.supabase.com:5432/postgres',
      entities: [Game],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    GameModule,
  ],
})
export class AppModule {}
