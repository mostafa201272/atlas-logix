import { Route } from '@angular/router';
import { BaseLayout } from '@layouts/base-layout/base-layout.component';
import { AuthLayout } from '@layouts/auth-layout/auth-layout.component';
import { MODULES_ROUTES } from '@utilities/routers';
import { DashboardLayout } from '@layouts/dashboard-layout/dashboard-layout.component';
import { authGuard } from '@core/guards/auth.guard';

export const modulesRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: MODULES_ROUTES.modules.auth.redirectTo,
  },
  {
    path: MODULES_ROUTES.modules.auth.name,
    component: AuthLayout,
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: MODULES_ROUTES.modules.dashboard.name,
    canActivate: [authGuard],
    component: DashboardLayout,
    loadChildren: () => import('./dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
  },
];
