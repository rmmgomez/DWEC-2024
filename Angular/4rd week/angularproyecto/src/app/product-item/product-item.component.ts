import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, Input, inject, input, output, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, StarRatingComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {
  product = input.required<Product>(); // required (obligatorio)
  showImage = input(true); // Con valor inicial por defecto (opcional)
  deleted = output<void>();
  #productsService = inject(ProductsService);
  #changeDetectorRef = inject(ChangeDetectorRef);
  #destroyRef = inject(DestroyRef);

  changeRating(rating: number) {
    const oldRating = this.product().rating; // Guardamos puntuación actual
    this.product().rating = rating; // Modificamos antes de la llamada
    this.#productsService
      .changeRating(this.product().id!, rating)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        error: () => { // Ha habido un error (puntuación no cambiada en el servidor)
          this.product().rating = oldRating; // Restauramos puntuación
          this.#changeDetectorRef.markForCheck(); // Detectar cambio
        },
      });
  }

  deleteProduct() {
    this.#productsService
      .deleteProduct(this.product().id!)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => this.deleted.emit());
  }
}
