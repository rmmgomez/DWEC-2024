import { ChangeDetectionStrategy, Component, Input, input, output, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';

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

  deleteProduct() {
    this.deleted.emit(); // Lanzamos el evento
  }
}
