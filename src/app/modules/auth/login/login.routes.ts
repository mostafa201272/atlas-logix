import { Route } from '@angular/router';

export const loginRoutes: Route[] = [
  {
    path: '',
    loadComponent() {
      return import('./pages/login/login.component').then((c) => c.LoginComponent);
    },
  },
];
