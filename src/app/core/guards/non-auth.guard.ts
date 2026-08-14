import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '@core/services/storage.service';
import { AUTH_KEYS } from '@modules/auth/models/enums';
import { MODULES_ROUTES } from '@utilities/routers';

export const nonAuthGuard: CanActivateFn = () => {
  const storageService = inject(StorageService);
  const router = inject(Router);

  const token = storageService.getStorage<string>(AUTH_KEYS.TOKEN);

  if (!token) {
    return true;
  }

  router.navigate([MODULES_ROUTES.modules.home.route]);
  return false;
};

