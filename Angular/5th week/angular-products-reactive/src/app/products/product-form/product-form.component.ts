import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EncodeBase64Directive } from '../../shared/directives/encode-base64.directive';
import { CanComponentDeactivate } from '../../shared/guards/leave-page.guard';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { DatePipe, JsonPipe } from '@angular/common';
import { ValidationClassesDirective } from '../../shared/directives/validation-classes.directive';
import { minDateValidator } from '../../shared/validators/min-date.validator';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    EncodeBase64Directive,
    JsonPipe,
    DatePipe,
    ValidationClassesDirective,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements CanComponentDeactivate {
  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);
  #saved = false; // Product has been saved

  #fb = inject(NonNullableFormBuilder);
  minDate = '2024-09-01';
  productForm = this.#fb.group({
    description: ['', [Validators.required, Validators.minLength(5)]],
    price: [0, [Validators.required, Validators.min(0.1)]],
    available: ['', [Validators.required, minDateValidator(this.minDate)]],
    imageUrl: ['', [Validators.required]],
  });
  imageBase64 = '';

  canDeactivate() {
    return (
      this.productForm.pristine ||
      this.#saved ||
      confirm('¿Quieres abandonar la página?. Los cambios se perderán...')
    );
  }

  addProduct() {
    this.#productsService
      .insertProduct({
        ...this.productForm.getRawValue(),
        rating: 1,
        imageUrl: this.imageBase64,
      })
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        this.#saved = true;
        this.#router.navigate(['/products']);
      });
  }
}
