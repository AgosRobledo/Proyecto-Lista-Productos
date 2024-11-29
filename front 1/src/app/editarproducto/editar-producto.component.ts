import { Component, OnInit } from '@angular/core';
import { Producto } from '../modules/producto';
import { BackendService } from '../backend.service';
import { ActivatedRoute, RouterEvent, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../product.service';

@Component({
    selector: 'app-nuevo-producto',
    standalone: true,
    imports: [FormsModule, CommonModule, RouterModule],
    templateUrl: './editar-producto.component.html',
    styleUrl: './editar-producto.component.css'
})
export class editarproducto implements OnInit {

    producto: Producto = {
        id: 0,
        nombre: '',
        precio: 0
    };

constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
) { }

ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.detail(id).subscribe(
    data => {
        this.producto = data;
    },
    err => {
        
        
        this.router.navigate(['/producto']);
    }
    );
}

onUpdate(): void {
    const id = this.activatedRoute.snapshot.params ['id'];
    this.productoService.update(id, this.producto).subscribe(
    data => {
        
        this.router.navigate(['/producto']);
    },
    err => {
        
    }
    );
    
}
    volver(): void {
        this.router.navigate(['/producto']);
        }

}