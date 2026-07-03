import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewService } from '../../../../core/services/reviews.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  reviews: any[] = [];
  constructor(private reviewService: ReviewService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe(reviews => {
      console.log('reviews', reviews);
      this.reviews = reviews;
      this.cdr.detectChanges();
    });
  }

}
