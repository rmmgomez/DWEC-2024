import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../interfaces/product';
import { EncodeBase64Directive } from '../directives/encode-base64.directive';
import { ProductsService } from '../services/products.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  add = output<Product>();
  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);

  newProduct: Product = { // Asignamos directamente
    id: 0,
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0
  };

  addProduct(productForm: NgForm) {
    this.#productsService
      .insertProduct(this.newProduct)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((product) => {
        this.add.emit(product); // Emitimos el producto (con id) devuelto por el servidor
        productForm.resetForm(); // Reseteamos los campos de newProduct
        this.newProduct.imageUrl = ''; // La imagen también (no está vinculada al formulario)
      });
  }
}
