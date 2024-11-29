import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Producto } from '../modules/producto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../product.service';

@Component({
    selector: 'app-nuevo-producto',
    standalone: true,
    imports: [FormsModule, CommonModule, RouterModule],
    templateUrl: './detalle-producto.component.html',
    styleUrls: ['./detalle-producto.component.css'] 
})
export class detalleproducto implements OnInit {

        producto: Producto | null = null;



        constructor(
        private productoService: ProductoService,
        private activatedRoute: ActivatedRoute,
        private router: Router
        ) { }
    
        ngOnInit() {
        const id = this.activatedRoute.snapshot.params ['id'];
        this.productoService.detail(id).subscribe(
            data => {
            this.producto = data;
            },
            err => {
            this.volver();
            }
        );
        }
    
        volver(): void {
        this.router.navigate(['/producto']);
        }
}