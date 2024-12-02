import { ResolveFn, Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { catchError, EMPTY } from 'rxjs';

export const productResolver: ResolveFn<Product> = (route) => {
  const productsService = inject(ProductsService);
  const router = inject(Router);
  return productsService.getProduct(+route.paramMap.get('id')!).pipe(
    catchError(() => {
      router.navigate(['/products']);
      return EMPTY;
    })
  );
};
