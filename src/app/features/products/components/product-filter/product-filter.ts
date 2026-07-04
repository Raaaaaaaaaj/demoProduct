import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {
  readonly Max_Price = 100000;
  searchTerm = '';
  minPrice = 0;
  maxPrice = this.Max_Price;
  sortBy = 'newest';

  searchControl = new FormControl('', {nonNullable: true});
  
  constructor(){
    this.searchControl.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(value => {
      console.log(value);
    })
  }
}
