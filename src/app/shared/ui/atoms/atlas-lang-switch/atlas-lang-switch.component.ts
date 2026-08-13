import { Component, inject } from '@angular/core';
import { LanguageService } from '@core/services/language.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'atlas-lang-switch',
  imports: [TranslatePipe],
  templateUrl: './atlas-lang-switch.component.html',
  styleUrl: './atlas-lang-switch.component.scss',
})
export class AtlasLangSwitchComponent {
  /**
   * INJECTION - LANGUAGE SERVICE
   */
  languageService = inject(LanguageService);

  /**
   * LANGUAGE SWITCHER
   */
  switchLanguage() {
    this.languageService.setLanguage(this.languageService.getCurrentLang() === 'ar' ? 'en' : 'ar');
  }
}
