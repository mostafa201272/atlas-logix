import { Injectable, inject } from '@angular/core';
import { InterpolationParameters, TranslateService } from '@ngx-translate/core';
import { StorageService } from './storage.service';
import { LANGUAGES, DEFAULT_LANGUAGE } from '@utilities/constants';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  /**
   * INJECTORs
   */
  _translateService = inject(TranslateService);
  _storageService = inject(StorageService);

  /**
   * Initializes the language settings for the application.
   * This function sets the default language, adds supported languages,
   * and determines the user's preferred language based on their browser settings or stored preference.
   *
   * @remarks
   * The function uses the _translateService from ngx-translate/core to manage translations.
   * It also relies on the StorageService to store and retrieve the user's preferred language.
   *
   * @returns {void}
   */
  initLang(): void {
    let browserLang;
    this._translateService.addLangs(LANGUAGES);
    if ((this._storageService.getStorage('lang') as string) !== null) {
      browserLang = this._storageService.getStorage('lang') as string;
    } else {
      this.setLanguage(DEFAULT_LANGUAGE);
      browserLang = this._translateService.getBrowserLang()!;
    }
    this._translateService.use(/en|ar/.exec(browserLang) ? browserLang : DEFAULT_LANGUAGE);
    this._translateService.setFallbackLang(DEFAULT_LANGUAGE);

    // SET DOCUMENT DIRECTION
    document.documentElement.setAttribute(
      'dir',
      this._storageService.getStorage('lang') !== DEFAULT_LANGUAGE ? 'rtl' : 'ltr',
    );
  }

  /**
   * Sets the application language and updates the document direction accordingly.
   *
   * @param lang - The language code to set (e.g., 'en' for English, 'ar' for Arabic).
   * @returns {void}
   */
  setLanguage(lang: string): void {
    this._translateService.use(lang);
    this._storageService.setStorage('lang', lang);

    // SET DOCUMENT DIRECTION
    document.documentElement.setAttribute('dir', lang !== DEFAULT_LANGUAGE ? 'rtl' : 'ltr');
  }

  /**
   * GET THE CURRENT LANGUAGE
   * @returns {string | null  } - The current language code (e.g., 'en' for English, 'ar' for Arabic).
   */
  getCurrentLang(): string | null {
    return this._translateService.getCurrentLang();
  }

  /**
   * GET TRANSLATION VALUE WRAPPER
   * @param value - The translation key to look up.
   * @param interpolateParams - Optional parameters to replace placeholders in the translation value.
   * @returns {string} - The translated value for the given key.
   */
  getTransValue(value: string, interpolateParams?: InterpolationParameters): string {
    return this._translateService.instant(value, interpolateParams) as string;
  }
}
