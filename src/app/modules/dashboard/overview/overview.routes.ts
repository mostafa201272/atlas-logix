import { Route } from '@angular/router';

export const overviewRoutes: Route[] = [
  {
    path: '',
    loadComponent() {
      return import('./pages/overview/overview.component').then((c) => c.OverviewComponent);
    },
  },
];
