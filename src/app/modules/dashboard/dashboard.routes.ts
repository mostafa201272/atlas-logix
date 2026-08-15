import { Route } from '@angular/router';
import { MODULES_ROUTES } from '@utilities/routers';
import { permissionGuard } from '@core/guards/permission.guard';
import { EPermission } from '@core/permissions/models/enums/permissions.enum';

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
    canActivate: [permissionGuard],
    data: { permission: EPermission.LIVE_STREAM },
    loadChildren: () =>
      import('./live-sensors/live-sensors.routes').then((m) => m.liveSensorsRoutes),
  },
  {
    path: MODULES_ROUTES.modules.dashboard.administration.name,
    title: MODULES_ROUTES.modules.dashboard.administration.label,
    canActivate: [permissionGuard],
    data: { permission: EPermission.TENANT_USER_ADMIN },
    loadChildren: () =>
      import('./administration/administration.routes').then((m) => m.administrationRoutes),
  },
];
