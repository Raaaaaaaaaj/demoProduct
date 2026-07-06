import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from '../../../../core/services/cart.service';
import { CartItem } from '../../../../core/models/cart-item.model';
import { CartButton } from '../../../../shared/components/cart-button.component';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [
    CommonModule,
    CartButton
  ],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})
export class CartSummary implements OnInit {

  cartItems: CartItem[] = [];

  constructor(
    public cartService: CartService
  ) {}

  ngOnInit(): void {

    this.loadCart();

    this.cartService.cartChanged.subscribe(() => {
      this.loadCart();
    });

  }

  loadCart() {

    this.cartItems = this.cartService.getCartItems();

  }

  removeItem(id: number) {

    this.cartService.remove(id);

    this.loadCart();

  }

  get subtotal() {

    return this.cartService.getSubtotal();

  }

  get tax() {

    return this.cartService.getTax();

  }

  get total() {

    return this.cartService.getTotal();

  }

}