import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { Product } from '../../../../core/models/product.model';
import { CommonModule } from '@angular/common';
import {ChangeDetectorRef} from '@angular/core';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  constructor(private productService: ProductService, private cdRef: ChangeDetectorRef){}

  products: Product[] = [];
  displayProducts: Product[] = [];

  page = 1;
  pageSize = 6;

  ngOnInit(){
    this.productService.getProducts().subscribe(res =>{
      this.products = res;
      this.loadPage();
      this.cdRef.detectChanges();
    })
  }

  loadPage(){
    const start = (this.page -1)*this.pageSize;
    const end = start+this.pageSize;

    this.displayProducts = this.products.slice(start,end);
    console.log('products', this.products.length);
  console.log('display', this.displayProducts.length);
  }

  next(){
    if(this.page * this.pageSize < this.products.length){
      this.page++;
      this.loadPage()
    }
  }

  prev(){
    if(this.page > 1){
      this.page--;
      this.loadPage();
    }
  }
}
