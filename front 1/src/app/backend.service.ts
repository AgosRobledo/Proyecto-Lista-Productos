import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
    })
    export class BackendService {

    public apiUrl = 'http://localhost:3000/user'; 
    public productoUrl = 'http://localhost:3000/producto';

    constructor(private http: HttpClient) { }

    enviarDatos(data: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}`, data);
        }

    obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
    }

    validateUser(username: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/validate`, { username, password });
    }

}