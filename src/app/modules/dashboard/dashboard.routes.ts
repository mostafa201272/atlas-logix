import { Route } from '@angular/router';
import { MODULES_ROUTES } from '@utilities/routers';

export const dashboardRoutes: Route[] = [
  {
    path: '',
    redirectTo: MODULES_ROUTES.modules.dashboard.redirectTo,
    pathMatch: 'full',
  },
  {
    path: MODULES_ROUTES.modules.dashboard.overview.name,
    title: MODULES_ROUTES.modules.dashboard.overview.label,
    loadChildren: () => import('./overview/overview.routes').then((m) => m.overviewRoutes),
  },
  {
    path: MODULES_ROUTES.modules.dashboard.shipments.name,
    title: MODULES_ROUTES.modules.dashboard.shipments.label,
    loadChildren: () => import('./shipments/shipments.routes').then((m) => m.shipmentsRoutes),
  },
  {
    path: MODULES_ROUTES.modules.dashboard.liveSensors.name,
    title: MODULES_ROUTES.modules.dashboard.liveSensors.label,
    loadChildren: () =>
      import('./live-sensors/live-sensors.routes').then((m) => m.liveSensorsRoutes),
  },
  {
    path: MODULES_ROUTES.modules.dashboard.administration.name,
    title: MODULES_ROUTES.modules.dashboard.administration.label,
    loadChildren: () =>
      import('./administration/administration.routes').then((m) => m.administrationRoutes),
  },
];
