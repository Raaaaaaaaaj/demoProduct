import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from '../../../../core/services/product.service';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit, OnChanges {
  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {}

  @Input() filters = {
    search: '',
    minPrice: 0,
    maxPrice: 100000,
    sortBy: 'newest',
  };

  products: Product[] = [];
  filteredProducts: Product[] = [];
  displayProducts: Product[] = [];

  page = 1;
  pageSize = 6;

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;

      // API load hone ke baad bhi filters apply honge
      this.applyFilters();
      this.cdr.detectChanges();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filters']) {
      this.applyFilters();
    }
  }

  applyFilters(): void {
    if (!this.products.length) return;

    this.filteredProducts = this.products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(this.filters.search.toLowerCase());

      const matchesPrice =
        product.price >= this.filters.minPrice &&
        product.price <= this.filters.maxPrice;

      return matchesSearch && matchesPrice;
    });

    switch (this.filters.sortBy) {
      case 'priceAsc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;

      case 'priceDesc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;

      case 'rating':
        this.filteredProducts.sort((a, b) => b.rating - a.rating);
        break;

      case 'newest':
      default:
        this.filteredProducts.sort((a, b) => b.id - a.id);
        break;
    }

    this.page = 1;
    this.loadPage();
    this.cdr.detectChanges();
  }

  loadPage(): void {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.displayProducts = this.filteredProducts.slice(start, end);
  }

  next(): void {
    if (this.page * this.pageSize < this.filteredProducts.length) {
      this.page++;
      this.loadPage();
    }
  }

  prev(): void {
    if (this.page > 1) {
      this.page--;
      this.loadPage();
    }
  }
}