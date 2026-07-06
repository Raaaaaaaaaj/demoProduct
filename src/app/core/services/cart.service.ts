import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private storageKey = 'cart';

  cartItems: CartItem[] = [];

  cartChanged = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loadCart();
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: Product) {

    const item = this.cartItems.find(x => x.id === product.id);

    if (item) {
      item.quantity++;
    } else {
      this.cartItems.push({
        ...product,
        quantity: 1
      });
    }

    this.saveCart();
    this.cartChanged.next(true);
  }

  increase(id: number) {

    const item = this.cartItems.find(x => x.id === id);

    if (!item) return;

    item.quantity++;

    this.saveCart();
    this.cartChanged.next(true);
  }

  decrease(id: number) {

    const item = this.cartItems.find(x => x.id === id);

    if (!item) return;

    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.remove(id);
    }

    this.saveCart();
    this.cartChanged.next(true);
  }

  remove(id: number) {

    this.cartItems = this.cartItems.filter(x => x.id !== id);

    this.saveCart();
    this.cartChanged.next(true);
  }

  getQuantity(id: number): number {

    const item = this.cartItems.find(x => x.id === id);

    return item ? item.quantity : 0;
  }

  getSubtotal(): number {

    let total = 0;

    this.cartItems.forEach(item => {
      total += item.price * item.quantity;
    });

    return total;
  }

  getTax(): number {

    return this.getSubtotal() * 0.18;
  }

  getTotal(): number {

    return this.getSubtotal() + this.getTax();
  }

  getCartCount(): number {

    let count = 0;

    this.cartItems.forEach(item => {
      count += item.quantity;
    });

    return count;
  }

  clearCart() {

    this.cartItems = [];

    this.saveCart();
    this.cartChanged.next(true);
  }

  private saveCart() {

    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
    this.cartChanged.next(true);
  }

  private loadCart() {

    const data = localStorage.getItem(this.storageKey);

    if (data) {
      this.cartItems = JSON.parse(data);
    }
  }

}