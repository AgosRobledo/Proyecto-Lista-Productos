//ENTiTY:simula una tabla de la base de datos, nombre user. Acá van a estra todos los atributos de las tablas
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ({
    name: 'user'
})
export class User {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
    })
    id: number;
    @Column ('varchar',{
        name: 'user',
    })
    user: string;
    @Column ('varchar',{
        name: 'pass',
    })
    pass: string;
}