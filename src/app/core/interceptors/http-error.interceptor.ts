import { type HttpErrorResponse, type HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LanguageService } from '../services/language.service';

import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (request, next) => {
  /**
   * INJECTIONS
   */
  const messageService = inject(MessageService);
  // const authService = inject(AuthService);
  const languageService = inject(LanguageService);

  /**
   * RETURN HANDLER
   */
  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      // handleError(error, messageService, authService, languageService);
      handleError(error, messageService, languageService);
      return throwError(() => error);
    }),
  );
};

function handleError(
  error: any,
  messageService: MessageService,
  // authService: AuthService,
  languageService: LanguageService,
) {
  /**
   * HANDEL UNAUTHENTICATED/FORBIDDEN USERS
   */
  // if (error.status === 401 || error.status === 403) {
  //   authService.logout();
  // }

  /**
   * HaNDLE LIST OF ERRORS
   */
  if (error?.error?.errors) {
    for (const e of Object.keys(error.error.errors)) {
      for (const msg of error.error.errors[e]) {
        messageService.add({
          severity: 'error',
          summary: languageService.getTransValue('error'),
          detail: languageService.getTransValue(msg),
        });
      }
    }
  } else {
    /**
     * HaNDLE SINGLE ERROR MESSAGE
     */
    messageService.add({
      severity: 'error',
      summary: languageService.getTransValue('error'),
      detail: languageService.getTransValue(error?.error?.message ?? 'error'),
    });
  }
}
