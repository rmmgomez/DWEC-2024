import { NgClass } from '@angular/common';
import { afterNextRender, Component, computed, DestroyRef, effect, inject, signal, viewChild, viewChildren } from '@angular/core';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, NgModel } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../services/products.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    ProductItemComponent,
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  #productsService = inject(ProductsService);

  products = signal<Product[]>([]);

  showImage = signal(true);

  search = signal('');
  searchDebounce = toSignal(
    toObservable(this.search).pipe(
      debounceTime(600), // 600 milisegundos hasta que deja de escribir
      distinctUntilChanged() // Solo si el valor cambia
    ),
    { initialValue: '' }
  );
  #destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      this.#productsService
        .getProducts(this.searchDebounce())
        .pipe(takeUntilDestroyed(this.#destroyRef))
        .subscribe((products) => this.products.set(products));
    });
  }

  toggleImage() {
    this.showImage.update((v) => !v);
  }

  addProduct(product: Product) {
    this.products.update((products) => [...products, product]);
  }

  deleteProduct(product: Product) {
    this.products.update((products) => products.filter((p) => p !== product));
  }
}
