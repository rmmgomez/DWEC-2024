import { NgClass } from '@angular/common';
import { Component, effect, model, signal } from '@angular/core';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [NgClass],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  rating = model.required<number>();
  auxRating = signal(0);

  constructor() {
    effect(() => this.auxRating.set(this.rating()), {allowSignalWrites: true});
  }
}
