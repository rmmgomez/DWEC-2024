import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'welcome',
      loadComponent: () =>
        import('./welcome/welcome.component').then((m) => m.WelcomeComponent),
      title: 'Bienvenido | Angular Products'
    },
    {
      path: 'products',
      loadChildren: () => import('./products/products.routes').then(m => m.productsRoutes)
    },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', redirectTo: '/welcome' },
  ];