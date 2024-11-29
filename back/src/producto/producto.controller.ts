import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  findAll() {
    return this.productoService.findAll();
  }


  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.productoService.findById(+id);
  }

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    console.log(createProductoDto)
    return this.productoService.create(createProductoDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productoService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productoService.delete(+id);
  }
}
