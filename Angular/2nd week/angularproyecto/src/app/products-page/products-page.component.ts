import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, computed, inject, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { CurrencyPipe, DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductFormComponent } from "../product-form/product-form.component";

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [NgClass, FormsModule, DatePipe, UpperCasePipe, CurrencyPipe, ProductFilterPipe, ProductItemComponent, ProductFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit{
  ngOnInit(): void {
    console.log('El componente products-page ha sido inicializado');
  }
  title = "Lista de la compra";
  products = signal<Product[]>([{
    id: 1,
    description: 'SSD hard drive',
    available: '2016-10-03',
    price: 75,
    imageUrl: '/ssd.jpg',
    rating: 5
  },{
    id: 2,
    description: 'LGA1151 Motherboard',
    available: '2016-09-15',
    price: 96.95,
    imageUrl: '/motherboard.jpg',
    rating: 4
  }]); 
  newProduct: Product = { // Asignamos directamente
    id: 0,
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0
  };
  search = signal('');
  showImage = signal(true); // WritableSignal<boolean>
  #changeDetector = inject(ChangeDetectorRef);
  filteredProducts = computed(() => {
    return this.search()
      ? this.products().filter((p) =>
          p.description.toLowerCase().includes(this.search().toLowerCase())
        )
      : this.products();
  });
  toggleImage() {
    this.showImage.update((show) => !show);
  }


  deleteProduct(product: Product) {
    this.products.update(products => products.filter(p => p !== product));
  }
  addProduct(product: Product) {
    product.id = Math.max(...this.products().map((p) => p.id!)) + 1;
    this.products.update((products) => [...products, product]);
  }
}
