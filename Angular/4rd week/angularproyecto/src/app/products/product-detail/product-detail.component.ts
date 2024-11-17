import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectorRef, Component, DestroyRef, effect, Inject, inject, input, numberAttribute } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IntlCurrencyPipe } from '../../shared/pipes/intl-currency.pipe';
import { StarRatingComponent } from '../../shared/star-rating/star-rating.component';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, StarRatingComponent, IntlCurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  id = input.required({ transform: numberAttribute });
  #productsService = inject(ProductsService);
  #title = inject(Title);
  product = input.required<Product>();
  #changeDetector = inject(ChangeDetectorRef);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);

  constructor() {
    effect(() =>
      this.#title.setTitle(this.product().description + ' | Angular Products')
    );
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
