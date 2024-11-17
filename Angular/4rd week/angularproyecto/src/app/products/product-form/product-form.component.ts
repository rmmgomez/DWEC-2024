import { ChangeDetectionStrategy, Component, DestroyRef, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../interfaces/product';
import { EncodeBase64Directive } from '../../shared/directives/encode-base64.directive';
import { ProductsService } from '../services/products.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);
  saved = false;

  newProduct: Product = { // Asignamos directamente
    id: 0,
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0
  };  

  addProduct() {
    this.#productsService
      .insertProduct(this.newProduct)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {this.saved = true; this.#router.navigate(['/products'])});
  }
  
  canDeactivate() {
    return this.saved || confirm('¿Quieres abandonar la página?. Los cambios se perderán...');
  }
}
