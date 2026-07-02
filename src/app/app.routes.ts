import { Routes } from '@angular/router';
import { ProductPage } from './features/products/pages/product-pagge.component';

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
      import('./features/cart/pages/cart-summary.component').then(
        (m) => m.CartSummaryPage
      ),
  },
  {
    path: '**',
    redirectTo: 'product',
  },
];