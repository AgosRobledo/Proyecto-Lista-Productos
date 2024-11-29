// src/recetas/recetas.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RecetasService } from './recetas.service';
import { Receta } from './entities/receta.entity';

@Controller('recetas')
export class RecetasController {
  constructor(private readonly recetasService: RecetasService) {}

  @Get()
  findAll() {
    return this.recetasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.recetasService.findOne(id);
  }

  @Post()
  create(@Body() receta: Receta) {
    return this.recetasService.create(receta);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() receta: Partial<Receta>) {
    return this.recetasService.update(id, receta);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.recetasService.remove(id);
  }
}
