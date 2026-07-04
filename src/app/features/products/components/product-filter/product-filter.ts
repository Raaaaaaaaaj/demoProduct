import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
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

  searchControl = new FormControl('', { nonNullable: true });

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.searchTerm = value;
        this.onFilterChange();
      });
  }

  onFilterChange() {
    const filter = {
      search: this.searchControl.value,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      sortBy: this.sortBy,
    };
    this.filterChanged.emit(filter);
  }

  // clear all the filters
  clearFilters() {
    this.searchTerm = '';
    this.searchControl.setValue('');

    this.minPrice = 0;
    this.maxPrice = this.Max_Price;
    this.sortBy = 'newest';

    this.onFilterChange();
  }

  // emiting event
  @Output() filterChanged = new EventEmitter<{
    search: string;
    minPrice: number;
    maxPrice: number;
    sortBy: string;
  }>();

  onMinSliderChange() {
    if (this.minPrice > this.maxPrice) {
      this.minPrice = this.maxPrice;
    }

    this.onFilterChange();
  }

  onMaxSliderChange() {
    if (this.maxPrice < this.minPrice) {
      this.maxPrice = this.minPrice;
    }

    this.onFilterChange();
  }

  onMinInputChange() {
    if (this.minPrice < 0) {
      this.minPrice = 0;
    }

    if (this.minPrice > this.maxPrice) {
      this.minPrice = this.maxPrice;
    }

    this.onFilterChange();
  }

  onMaxInputChange() {
    if (this.maxPrice > this.Max_Price) {
      this.maxPrice = this.Max_Price;
    }

    if (this.maxPrice < this.minPrice) {
      this.maxPrice = this.minPrice;
    }

    this.onFilterChange();
  }
}
