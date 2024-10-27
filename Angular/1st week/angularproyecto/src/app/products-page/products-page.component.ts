import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { NgClass } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  title = "Lista de la compra";
  products: Product[] =[{
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
  }]; 
  showImage = true;
  newProduct: Product = { // Asignamos directamente
    id: 0,
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0
  };

  toggleImage() {
    this.showImage = !this.showImage;
  }
  changeImage(fileInput: HTMLInputElement) { // Referencia directa al input
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.newProduct.imageUrl = reader.result as string;
    });
  }

  addProduct(productForm: NgForm) {
    this.newProduct.id = Math.max(...this.products.map(p => p.id!)) + 1;
    this.products.push({...this.newProduct}); // Clonamos objeto antes de añadirlo
    productForm.resetForm();
    this.newProduct.imageUrl = '';
  }
}
