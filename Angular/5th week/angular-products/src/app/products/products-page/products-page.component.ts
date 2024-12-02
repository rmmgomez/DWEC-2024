import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../services/products.service';

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
  filteredProducts = computed(() => {
    const searchLower = this.search()?.toLocaleLowerCase();
    return searchLower
      ? this.products().filter((prod) =>
          prod.description.toLocaleLowerCase().includes(searchLower)
        )
      : this.products();
  });

  constructor() {
    this.#productsService
      .getProducts()
      .pipe(takeUntilDestroyed())
      .subscribe((products) => this.products.set(products));
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
