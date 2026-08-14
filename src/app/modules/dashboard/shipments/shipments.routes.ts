import { Route } from '@angular/router';

export const shipmentsRoutes: Route[] = [
  {
    path: '',
    loadComponent() {
      return import('./pages/shipments/shipments.component').then((c) => c.ShipmentsComponent);
    },
  },
];
