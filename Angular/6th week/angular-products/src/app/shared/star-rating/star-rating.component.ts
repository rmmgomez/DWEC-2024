import { NgClass } from '@angular/common';
import { Component, effect, model, signal } from '@angular/core';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  rating = model.required<number>();
  auxRating = signal(0);
  starSolid = faStarSolid;
  starRegular = faStarRegular;

  constructor() {
    effect(() => this.auxRating.set(this.rating()));
  }
}
