import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import {
  ProductsResponse,
  SingleProductResponse,
} from '../../shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl = 'http://localhost:3000/api/products';

  private readonly http_Client = inject(HttpClient);

  private productsSubject = new BehaviorSubject<
    ProductsResponse['data'] | null
  >(null);
  readonly products$ = this.productsSubject.asObservable();

  getProducts(
    page: number = 1,
    limit: number = 20
  ): Observable<ProductsResponse['data'] | null> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http_Client
      .get<ProductsResponse>(`${this.apiUrl}`, { params })
      .pipe(
        map((res) => {
          return res.data;
        }),
        catchError((error) => {
          if (error.status === 404) {
            return of(null);
          }
          throw error;
        })
      );
  }
  loadProducts(page: number = 1, limit: number = 10) {
    this.getProducts(page, limit).subscribe((response) => {
      if (response) {
        this.productsSubject.next(response);
      } else {
        this.productsSubject.next(null);
      }
    });
  }
  getProductsbyId(pId: string) {
    return this.http_Client
      .get<SingleProductResponse>(`${this.apiUrl}/${pId}`)
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          if (error.status === 404) {
            return of(null);
          }
          throw error;
        })
      );
  }
}
