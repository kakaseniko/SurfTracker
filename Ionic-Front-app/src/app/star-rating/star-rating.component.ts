import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() currentRating = 0;
  @Input() clickable = true;
  @Output() ratingUpdated = new EventEmitter<number>();
  stars = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {}

  rate(rating: number) {
    this.currentRating = rating;
    this.ratingUpdated.emit(this.currentRating);
  }

  updateRating(rating: number): void {
    if (this.currentRating === 1 && rating === 1) {
      this.currentRating = 0;
    } else {
      this.currentRating = rating;
    }
    this.ratingUpdated.emit(this.currentRating);
  }
  
}
