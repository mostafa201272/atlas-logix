import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { LanguageService } from '@core/services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class CustomTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly languageService = inject(LanguageService);
  private readonly translateService = inject(TranslateService);

  private currentTitleKey: string | undefined;

  constructor() {
    super();

    /**
     * Re-evaluate and update title when application language changes
     */
    this.translateService.onLangChange.subscribe(() => {
      if (this.currentTitleKey) {
        this.updateTitleWithKey(this.currentTitleKey);
      }
    });
  }

  /**
   * Router Title update lifecycle method
   */
  override updateTitle(snapshot: RouterStateSnapshot): void {
    const titleKey = this.buildTitle(snapshot);
    this.currentTitleKey = titleKey;

    if (titleKey) {
      this.updateTitleWithKey(titleKey);
    } else {
      const appName = this.languageService.getTransValue('project.name');
      this.title.setTitle(appName);
    }
  }

  /**
   * Formats and sets document title based on translation key
   */
  private updateTitleWithKey(key: string): void {
    const appName = this.languageService.getTransValue('project.name');
    const translatedTitle = this.languageService.getTransValue(key);

    if (translatedTitle && translatedTitle !== key) {
      this.title.setTitle(`${translatedTitle} | ${appName}`);
    } else {
      this.title.setTitle(appName);
    }
  }
}
