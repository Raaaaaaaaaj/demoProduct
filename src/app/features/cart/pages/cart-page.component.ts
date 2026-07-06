import { Component } from '@angular/core';
import { CartSummary } from '../components/cart-summary/cart-summary';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartSummary],
  template: `
    <app-cart-summary></app-cart-summary>
  `,
})
export class CartPage {}