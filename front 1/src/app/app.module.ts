import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductoComponent } from './producto/lista-producto.component';
//import { DetalleProductoComponent } from './producto/detalle-producto.component';
//import { EditarProductoComponent } from './producto/editar-producto.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routes } from './app.routes';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterLink, RouterModule } from '@angular/router';
import { nuevoproducto } from './nuevoproducto/nuevo-producto.component';

@NgModule({
  declarations: [

  ],
  imports: [
    nuevoproducto,
    FormsModule,
    ListaProductoComponent,
    CommonModule,
    AppComponent,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    RouterLink,
  ]
})
export class AppModule { }































 //   DetalleProductoComponent,
   // EditarProductoComponent,