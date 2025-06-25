import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './game.entity';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  getAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Post()
  create(@Body() body: Partial<Game>): Promise<Game> {
    return this.gameService.create(body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.gameService.delete(+id);
  }
}
