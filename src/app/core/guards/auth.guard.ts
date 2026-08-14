import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthFacade } from '@modules/auth/facade/auth.facade';
import { StorageService } from '@core/services/storage.service';
import { AUTH_KEYS } from '@modules/auth/models/enums';
import { MODULES_ROUTES } from '@utilities/routers';

export const authGuard: CanActivateFn = () => {
  const authFacade = inject(AuthFacade);
  const storageService = inject(StorageService);
  const router = inject(Router);

  const token = storageService.getStorage<string>(AUTH_KEYS.TOKEN);

  if (!token) {
    router.navigate([MODULES_ROUTES.modules.auth.login.route]);
    return false;
  }

  if (authFacade.data()) {
    return true;
  }

  return authFacade.getUser();
};

