import { Component} from '@angular/core';
import { Producto } from '../modules/producto';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../product.service';

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {

  productos: Producto[] = [];
  listavacia=undefined;

  constructor(
    private productoService: ProductoService, private router: Router
    ) { }

  ngOnInit(): void{
    this.cargarProductos();
  }

  verDetalle(id: number | undefined) {
    this.router.navigate(['/detalle', id]);
  }

  editarProducto(id: number | undefined) {
    this.router.navigate([`/editar/${id}`]);
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
        this. listavacia=undefined;
      },
      err => {
        this.listavacia=err.error.message;
        console.log(err);
      }
    );
  }

  borrar(id: number | undefined) {
  this.productoService.delete(Number(id)).subscribe(
    data => {
      this.cargarProductos();
      },
      err => {
        console.log(err);
        }
  )
  }

}