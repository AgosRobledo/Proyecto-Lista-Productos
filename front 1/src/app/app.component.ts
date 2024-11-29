//componente iniciall 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
//import { EditarProductoComponent } from './producto/editar-producto.component';
//import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { nuevoproducto } from './nuevoproducto/nuevo-producto.component';
import { detalleproducto } from './detalleproducto/detalle-producto.component';
import { editarproducto } from './editarproducto/editar-producto.component';
//import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegisterComponent, HomeComponent, ListaProductoComponent, nuevoproducto, detalleproducto,editarproducto
    ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}





























