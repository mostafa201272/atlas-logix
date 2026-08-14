import { Route } from '@angular/router';

export const administrationRoutes: Route[] = [
  {
    path: '',
    loadComponent() {
      return import('./pages/administration/administration.component').then(
        (c) => c.AdministrationComponent,
      );
    },
  },
];
