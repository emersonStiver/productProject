import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewProduct, Product } from '../core/models/product-models';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  _productsList = new BehaviorSubject<Product[]>([]);
  private readonly productsList$: Observable<Product[]> =
    this._productsList.asObservable();

  apiUrl = 'http://localhost:8081/products';

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {

    const request = this.http.get<Product[]>(`${this.apiUrl}/getAll`).pipe(
      tap((products: Product[]) => {
        this._productsList.next(products);
      })
    );

    return request;
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/getById/${id}`);
  }

  addProduct(product: NewProduct): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/add`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/update/${product.id}`, product);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
