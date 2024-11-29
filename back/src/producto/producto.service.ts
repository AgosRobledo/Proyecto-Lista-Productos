import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';  // Asegúrate de tener la ruta correcta
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productRepository: Repository<Producto>,
  ) {}

  // Obtener todos los productos
  async findAll(): Promise<Producto[]> {
    const list = await this.productRepository.find();
    if (!list.length) {
      throw new NotFoundException({ message: 'La lista está vacía' });
    }
    return list;
  }

  // Buscar un producto por ID
  async findById(id: number): Promise<Producto> {
    const producto = await this.productRepository.findOne({ where: { id } });
    if (!producto) {
      throw new NotFoundException({ message: 'No existe' });
    }
    return producto;
  }

  // Buscar un producto por nombre
  async findByNombre(nombre: string): Promise<Producto> {
    const producto = await this.productRepository.findOne({ where: { nombre } });
    return producto;
  }

  // Crear un nuevo producto
  async create(dto: CreateProductoDto): Promise<any> {
    console.log(dto)
    const producto = this.productRepository.create(dto);
    await this.productRepository.save(producto);
    console.log("Éxito")
    return { message: 'Producto creado'};
  }

    // Crear un nuevo producto
    async update(id:number, dto: UpdateProductoDto): Promise<any> {
      const producto = await this.findById(id);
      producto.nombre = dto.nombre ? dto.nombre : producto.nombre;
      producto.precio = dto.precio !== undefined ? dto.precio : producto.precio;
      await this.productRepository.save(producto);
      return { message: 'Producto actualizado' };
    }

    async delete(id:number):Promise<any> {
      const producto = await this.findById(id);
      await this.productRepository.delete(producto);
      return { message: 'Producto eliminado'}
    }
}

