import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor (private http: HttpClient){}
  getProducts(){
    return this.http.get<Product[]>('assets/data/product.json');
  }
  getProductById(id: number) {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === id))
    );
  }
}
