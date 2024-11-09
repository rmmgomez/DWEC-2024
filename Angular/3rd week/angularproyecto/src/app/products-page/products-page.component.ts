import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, computed, inject, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { AsyncPipe, CurrencyPipe, DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductFormComponent } from "../product-form/product-form.component";
import { ProductsService } from '../services/products.service';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Subscription, combineLatest, map } from 'rxjs';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [NgClass, FormsModule, DatePipe, UpperCasePipe, CurrencyPipe, ProductFilterPipe, ProductItemComponent, ProductFormComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit{
  
  title = "Lista de la compra";
  #productsService = inject(ProductsService); // Inyectamos el servicio
  products = signal<Product[]>([]);
  search = signal('');
  showImage = signal(true); // WritableSignal<boolean>

  filteredProducts$ = combineLatest([
    toObservable(this.products),
    toObservable(this.search),
  ]).pipe(
    map(([products, search]) => {
      return search
        ? products.filter((p) =>
            p.description.toLowerCase().includes(this.search().toLowerCase())
          )
        : products;
    })
  );
  
  filteredProducts = toSignal(this.filteredProducts$, {initialValue: []});

  ngOnInit(): void {
    console.log('El componente products-page ha sido inicializado');
  }

  constructor() {
    this.#productsService
      .getProducts()
      .subscribe(products => this.products.set(products));
  }
  
  addProduct(product: Product) {
    this.products.set([...this.products(), product]);
  }

  deleteProduct(product: Product) {
    this.products.update(products=> products.filter(p => p !== product));
  }

  toggleImage() {
    this.showImage.update((show) => !show);
  }
}
