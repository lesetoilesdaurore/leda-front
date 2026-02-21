import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'tarifs',
    loadComponent: () => import('./pages/pricing/pricing').then((m) => m.Pricing),
  },
  {
    path: 'bio',
    loadComponent: () => import('./pages/bio/bio').then((m) => m.Bio),
  },
  {
    path: 'cours/:slug',
    loadComponent: () => import('./pages/class-detail/class-detail').then((m) => m.ClassDetail),
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./pages/legal/legal').then((m) => m.Legal),
  },
  {
    path: 'confidentialite',
    loadComponent: () => import('./pages/privacy/privacy').then((m) => m.Privacy),
  },
];
