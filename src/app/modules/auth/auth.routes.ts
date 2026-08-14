import { Route } from '@angular/router';
import { nonAuthGuard } from '@core/guards/non-auth.guard';
import { MODULES_ROUTES } from '@utilities/routers';

export const authRoutes: Route[] = [
  {
    path: '',
    redirectTo: MODULES_ROUTES.modules.auth.redirectTo,
    pathMatch: 'full',
  },
  {
    path: MODULES_ROUTES.modules.auth.login.name,
    canActivate: [nonAuthGuard],
    loadChildren: () => import('./login/login.routes').then((m) => m.loginRoutes),
  },
];
