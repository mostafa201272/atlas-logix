import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayout } from '@layouts/base-layout/base-layout.component';
import { AuthLayout } from '@layouts/auth-layout/auth-layout.component';
import { MODULES_ROUTES } from '@utilities/routers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: MODULES_ROUTES.modules.auth.redirectTo,
  },
  {
    path: MODULES_ROUTES.modules.auth.name,
    component: AuthLayout,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: MODULES_ROUTES.modules.home.name,
    component: BaseLayout,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
