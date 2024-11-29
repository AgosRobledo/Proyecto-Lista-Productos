import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Producto } from '../modules/producto';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../product.service';

@Component({
    selector: 'app-nuevo-producto',
    standalone: true,
    imports: [RouterModule, FormsModule, CommonModule, ReactiveFormsModule],
    templateUrl: './nuevo-producto.component.html',
    styleUrls: ['./nuevo-producto.component.css'] 
})
export class nuevoproducto  implements OnInit{
    form!: FormGroup


        constructor(
        private productoService: ProductoService,
        private router: Router
        ) { }
    
        ngOnInit() {
            this.form = new FormGroup({

                nombre: new FormControl("", [Validators.required]),
                precio: new FormControl("", [Validators.required, Validators.min(0)])

//conjunto de campos
//un solo campo de entrada
            })
        }
    
        post_user(): void {
        const { nombre, precio } = this.form.value;
        const producto = new Producto(nombre, precio);
        console.log(producto)
        this.productoService.save(producto).subscribe(data => 
        {
            if(data.message === "Producto creado") {

                this.router.navigate(["/producto"])
            } else {
                alert("Ha ocurrido un error al guardar el producto")
            }
        }
        )
        }
        
        volver(): void {
            this.router.navigate(['/producto']);
            }
}