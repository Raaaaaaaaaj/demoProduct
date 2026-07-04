import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  styles: ``,
})
export class CartButton {

@Input() quantity = 0;

  @Output() quantityChange = new EventEmitter<number>();

  addToCart() {
    this.quantity = 1;
    this.quantityChange.emit(this.quantity);
  }

  increase() {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    } else {
      this.quantity = 0;
    }

    this.quantityChange.emit(this.quantity);
  }
}
