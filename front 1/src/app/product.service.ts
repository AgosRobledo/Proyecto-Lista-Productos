
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './modules/producto';


@Injectable({
    providedIn: 'root'
    })
    export class ProductoService {

    public productoUrl = 'http://localhost:3000/producto';

    constructor(private http: HttpClient) { }

    public lista(): Observable<Producto[]> {
        return this.http.get<Producto[]>(`${this.productoUrl}`);
    }
    
    public detail(id: number): Observable<Producto> {
        return this.http.get<Producto>(`${this.productoUrl}/${id}`);
    }
    
    public save(producto: Producto): Observable<any> {
        const { nombre, precio } = producto
        const response = this.http.post<Producto>(`${this.productoUrl}`, { nombre, precio });
        return response;
    }
    
    public update(id: number, producto: Producto): Observable<any> {
        return this.http.put<any>(`${this.productoUrl}/${id}`, producto);
    }
    
    public delete(id: number): Observable<any> {
        return this.http.delete<any>(`${this.productoUrl}/${id}`);
    }

}

