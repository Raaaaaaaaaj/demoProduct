import { Component } from '@angular/core';
import { ProductFilter } from '../components/product-filter/product-filter';
import { ProductList } from '../components/product-list/product-list';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductFilter, ProductList],
  template: `
    <div class="row w-100">
      <div class="col-12 col-md-4 col-lg-3 vertical-divider">
        <!-- Product Filter Component -->
        <app-product-filter></app-product-filter>
      </div>
      <div class="col-12 col-md-8 col-lg-9 ps-md-4">
        <!-- Product List Component -->
        <app-product-list></app-product-list>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductPage {}
