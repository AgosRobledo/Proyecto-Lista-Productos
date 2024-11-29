// src/recetas/recetas.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receta } from './entities/receta.entity';

@Injectable()
export class RecetasService {
  constructor(
    @InjectRepository(Receta)
    private recetaRepository: Repository<Receta>,
  ) {}

  findAll(): Promise<Receta[]> {
    return this.recetaRepository.find();
  }

  findOne(id: number): Promise<Receta> {
    return this.recetaRepository.findOneBy({ id });
  }

  create(receta: Receta): Promise<Receta> {
    return this.recetaRepository.save(receta);
  }

  update(id: number, receta: Partial<Receta>) {
    return this.recetaRepository.update(id, receta);
  }

  remove(id: number): Promise<void> {
    return this.recetaRepository.delete(id).then(() => undefined);
  }
}