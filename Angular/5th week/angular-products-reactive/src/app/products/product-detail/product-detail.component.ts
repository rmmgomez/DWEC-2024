import { DatePipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  effect,
  inject,
  input
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { IntlCurrencyPipe } from '../../shared/pipes/intl-currency.pipe';
import { ProductsService } from '../services/products.service';
import { StarRatingComponent } from '../../shared/star-rating/star-rating.component';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [DatePipe, IntlCurrencyPipe, StarRatingComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  #productsService = inject(ProductsService);
  #title = inject(Title);
  #changeDetector = inject(ChangeDetectorRef);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);

  // id = input.required({ transform: numberAttribute });

  product = input.required<Product>();

  constructor() {
    effect(() => {
      this.#title.setTitle(this.product()!.description + ' | Angular Products')
    });
  }

  changeRating(rating: number) {
    const oldRating = this.product()!.rating;
    this.product()!.rating = rating;
    this.#productsService
      .changeRating(this.product()!.id!, rating)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        error: () => {
          this.product()!.rating = oldRating;
           this.#changeDetector.markForCheck();
        },
      });
  }

  goBack() {
    this.#router.navigate(['/products']);
  }
}
