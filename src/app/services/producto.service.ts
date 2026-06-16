import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5082/api/productos';

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  //Método que envía un nuevo producto al backend
  agregarProducto(producto: Omit<Producto, 'id'>): Observable<Producto> {
    //Omit -> indica que el producto enviado no necesita incluir id, porque el backend lo genera
    return this.http.post<Producto>(this.apiUrl, producto);
    //Hacer una solicitud POST a la API
  }
}
