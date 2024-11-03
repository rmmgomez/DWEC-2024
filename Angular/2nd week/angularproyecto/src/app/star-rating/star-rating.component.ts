import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, model, signal } from '@angular/core';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [NgClass],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarRatingComponent {
  rating = model.required<number>();
  auxRating = signal(1);

  constructor() {
    // La primera vez y cada vez que cambie el valor de rating se actualiza auxRating
    effect(() => this.auxRating.set(this.rating()), {
      allowSignalWrites: true, // Permitir escribir en señales con effect (en Angular v19 no hace falta)
    });
  }
}
