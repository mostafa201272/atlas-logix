import { Route } from '@angular/router';
import { BaseLayout } from '@layouts/base-layout/base-layout.component';
import { AuthLayout } from '@layouts/auth-layout/auth-layout.component';
import { MODULES_ROUTES } from '@utilities/routers';

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
    path: MODULES_ROUTES.modules.home.name,
    component: BaseLayout,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];
