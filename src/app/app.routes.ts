import { Routes } from '@angular/router';
import { ProductPage } from './features/products/pages/product-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    component: ProductPage,
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/pages/cart-page.component').then(
        (m) => m.CartPage
      ),
  },
  {
    path: 'product-details/:id',
    loadComponent: () =>
      import('./features/products/components/product-details/product-details').then(
        (m) => m.ProductDetails
      ),
  },
  {
    path: '**',
    redirectTo: 'product',
  },
];