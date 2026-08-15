import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AppBase } from '@core/bases/app-base.base';
import { AtlasDashboardHeaderComponent } from '@shared/ui/atoms/atlas-dashboard-header/atlas-dashboard-header.component';

@Component({
  selector: 'atlas-live-sensors',
  imports: [TranslatePipe, AtlasDashboardHeaderComponent],
  templateUrl: './live-sensors.component.html',
  styleUrl: './live-sensors.component.scss',
})
export class LiveSensorsComponent extends AppBase {
  /**
   * Base translation point for live sensors
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.liveSensors.itemsBaseTranslationKey;
}
