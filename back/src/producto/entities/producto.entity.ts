
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'productos' })  // Puedes cambiar el nombre si es necesario
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precio: number;
}
