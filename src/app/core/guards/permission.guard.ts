import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EPermission } from '@core/permissions/models/enums/permissions.enum';
import { PermissionsService } from '@core/permissions/services/permissions.service';
import { MODULES_ROUTES } from '@utilities/routers';

export const permissionGuard: CanActivateFn = (route) => {
  const permissionsService = inject(PermissionsService);
  const router = inject(Router);

  const requiredPermission = route.data?.['permission'] as EPermission | EPermission[];

  if (!requiredPermission) {
    return true;
  }

  const isAllowed = permissionsService.hasPermission(requiredPermission);

  if (!isAllowed) {
    router.navigate([MODULES_ROUTES.modules.dashboard.route]);
    return false;
  }

  return true;
};
