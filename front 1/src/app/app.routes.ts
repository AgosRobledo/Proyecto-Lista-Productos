import { RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { nuevoproducto } from './nuevoproducto/nuevo-producto.component';
import { editarproducto } from './editarproducto/editar-producto.component';
import { detalleproducto } from './detalleproducto/detalle-producto.component';



export const routes: Routes = [
    {path: '', redirectTo: '/register', pathMatch: 'full' },// Redirige al login por defecto
    {path: 'register', component: RegisterComponent },// Ruta a,l componente register
    {path: 'login', component: LoginComponent},// Ruta al componente Login
    {path: '', redirectTo: '/inicio', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},

    {path: 'producto', component: ListaProductoComponent},
    {path: 'detalle/:id', component: detalleproducto},
    {path: 'nuevo', component: nuevoproducto},
    {path: 'editar/:id', component: editarproducto},
    ]

/*si pongo dentro de comillas en la url de la web debo poner: local host:4200/login y vacio seria: localhost:4200*/
@NgModule({

    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule,]
})
export class AppRoutingModule {}




