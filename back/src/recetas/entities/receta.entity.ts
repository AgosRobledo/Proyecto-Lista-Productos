// src/recetas/receta.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
    name: 'Receta'
})
export class Receta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    imagen: string;

    @Column("simple-array")
    ingredientes: string[];

    @Column("simple-array")
    preparacion: string[];
}

