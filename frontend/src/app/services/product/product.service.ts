import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/components/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  private baseURL = "http://localhost:3001/products"

  saved(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }

  readById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseURL}/${id}`);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseURL}/${product.id}`, product);
  }

  delete(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.baseURL}/${id}`);
  }
}
