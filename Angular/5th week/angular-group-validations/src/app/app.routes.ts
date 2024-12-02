import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'template',
    loadComponent: () =>
      import('./template-forms/template-forms.component').then(
        (m) => m.TemplateFormsComponent
      ),
  },
  {
    path: 'reactive',
    loadComponent: () =>
      import('./reactive-forms/reactive-forms.component').then(
        (m) => m.ReactiveFormsComponent
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: '/template' },
  { path: '**', redirectTo: '/template' },
];
