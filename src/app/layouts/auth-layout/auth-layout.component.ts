import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { TranslatePipe } from '@ngx-translate/core';
import { AppBase } from '@core/bases/app-base-component';
import { AtlasIdentityComponent } from '@shared/ui/atoms/atlas-identity/atlas-identity.component';
import { AtlasLangSwitchComponent } from '@shared/ui/atoms/atlas-lang-switch/atlas-lang-switch.component';

@Component({
  selector: 'auth-layout',
  imports: [
    RouterOutlet,
    ToastModule,
    TranslatePipe,
    AtlasIdentityComponent,
    AtlasLangSwitchComponent,
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayout extends AppBase {
  /**
   * Hold the base translation point of the auth module
   */
  protected readonly baseTranslationPoint: string =
    this.MODULES_ROUTES.modules.auth.itemsBaseTranslationKey;

  /**
   * Promo metrics
   */
  protected metrics: { key: string; value: string }[] = [
    {
      key: `${this.baseTranslationPoint}promo.complianceOperations.metrics.monitoring.title`,
      value: `${this.baseTranslationPoint}promo.complianceOperations.metrics.monitoring.value`,
    },
    {
      key: `${this.baseTranslationPoint}promo.complianceOperations.metrics.traceability.title`,
      value: `${this.baseTranslationPoint}promo.complianceOperations.metrics.traceability.value`,
    },
    {
      key: `${this.baseTranslationPoint}promo.complianceOperations.metrics.protected.title`,
      value: `${this.baseTranslationPoint}promo.complianceOperations.metrics.protected.value`,
    },
  ];
}
