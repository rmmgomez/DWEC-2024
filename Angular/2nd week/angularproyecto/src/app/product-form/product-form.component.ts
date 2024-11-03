import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  add = output<Product>();

  newProduct: Product = { // Asignamos directamente
    id: 0,
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0
  };

  #changeDetector = inject(ChangeDetectorRef);

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.newProduct.imageUrl = reader.result as string;
      this.#changeDetector.markForCheck();
    });
  }

  // Este método cambia (no gestionamos la inserción en el array de productos)
  addProduct(productForm: NgForm) {
    this.add.emit({...this.newProduct}); // Enviamos al padre una copia del producto a insertar
    productForm.resetForm(); // Reseteamos los campos de newProduct
    this.newProduct.imageUrl = ''; // La imagen también (no está vinculada al formulario)
  }
}
