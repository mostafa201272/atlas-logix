import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService, provideTranslateLoader } from '@ngx-translate/core';

import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { routes } from './app.routes';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { HttpBackend, provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpErrorInterceptor } from '@core/interceptors';
import { DEFAULT_LANGUAGE } from '@utilities/constants';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { LanguageService } from '@core/services/language.service';

/**
 * Factory: Translation loader for multi-folder i18n structure
 */
function translationLoaderFactory(httpBackend: HttpBackend): MultiTranslateHttpLoader {
  return new MultiTranslateHttpLoader(httpBackend, [
    '/assets/i18n/common/',
    '/assets/i18n/errors/',
    '/assets/i18n/modules/auth/',
  ]);
}

/**
 * Root configuration
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpErrorInterceptor])),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark-mode',
          cssLayer: {
            name: 'primeng',
            order: 'app-styles, base, components, primeng, utilities',
          },
        },
      },
      ripple: true,
    }),
    provideTranslateService({
      loader: provideTranslateLoader(() => translationLoaderFactory(inject(HttpBackend))),
      fallbackLang: DEFAULT_LANGUAGE,
    }),
    provideAppInitializer(() => {
      inject(LanguageService).initLang();
    }),
    MessageService,
    ConfirmationService,
    DialogService,
    DatePipe,
  ],
};
