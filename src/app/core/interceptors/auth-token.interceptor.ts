import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '@core/services/storage.service';
import { AUTH_KEYS } from '@modules/auth/models/enums';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  /**
   * INJECTION - Storage Service
   */
  const storageService = inject(StorageService);

  /**
   * Holder - Auth Token
   */
  const token = storageService.getStorage<string>(AUTH_KEYS.TOKEN);

  if (token) {
    /**
     * MODIFICATION - Clone the request and add the token
     */
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    /**
     * PASS MODIFIED REQUEST TO THE NEXT INTERCEPTOR
     */
    return next(authReq);
  }

  /**
   * PASS ORIGINAL REQUEST TO THE NEXT INTERCEPTOR
   */
  return next(req);
};
