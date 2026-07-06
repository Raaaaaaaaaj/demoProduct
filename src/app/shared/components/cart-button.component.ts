import { Component, Input } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { CartService } from '../../core/services/cart.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [],
  template: `
    @if(quantity === 0){

    <button
      class="btn btn-outline-success w-100"
      (click)="addToCart()">
      Add
    </button>

    }@else{

    <div class="btn-group w-100">

      <button
        class="btn btn-success"
        (click)="decrease()">
        <i class="fa fa-minus"></i>
      </button>

      <button
        class="btn btn-outline-success disabled flex-grow-1">
        {{ quantity }}
      </button>

      <button
        class="btn btn-success"
        (click)="increase()">
        <i class="fa fa-plus"></i>
      </button>

    </div>

    }
  `,
})
export class CartButton {

  @Input({ required: true }) product!: Product;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  get quantity() {
    return this.cartService.getQuantity(this.product.id);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  increase() {
    this.cartService.increase(this.product.id);
  }

  decrease() {
    this.cartService.decrease(this.product.id);
  }

  ngOnInit() {

  this.cartService.cartChanged.subscribe(() => {
    this.cdr.detectChanges();
  });

}

}