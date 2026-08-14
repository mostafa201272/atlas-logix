import { Routes } from '@angular/router';
import { MODULES_ROUTES } from '@utilities/routers';

export const routes: Routes = [
  {
    path: MODULES_ROUTES.modules.name,
    loadChildren: () => import('./modules/modules.routes').then((m) => m.modulesRoutes),
  },
];
