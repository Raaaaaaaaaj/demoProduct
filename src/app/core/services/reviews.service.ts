import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/reviews.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor (private http: HttpClient){}
  getReviews(){
    return this.http.get<Review[]>('assets/data/reviews.json');
  }
}
