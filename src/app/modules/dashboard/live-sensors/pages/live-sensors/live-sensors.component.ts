import { Component, inject, OnDestroy } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AppBase } from '@core/bases/app-base.base';
import { AtlasDashboardHeaderComponent } from '@shared/ui/atoms/atlas-dashboard-header/atlas-dashboard-header.component';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';
import { AtlasCardComponent } from '@shared/ui/molecules/atlas-card/atlas-card.component';
import { LiveSensorsFacade } from '../../facade/live-sensors.facade';
import { AuthFacade } from '@modules/auth/facade/auth.facade';
import { AtlasLiveSensorMetricsComponent } from '../../ui/components/atlas-live-sensor-metrics/atlas-live-sensor-metrics.component';
import { AtlasLiveSensorFeedTableComponent } from '../../ui/components/atlas-live-sensor-feed-table/atlas-live-sensor-feed-table.component';

@Component({
  selector: 'atlas-live-sensors',
  imports: [
    TranslatePipe,
    AtlasDashboardHeaderComponent,
    AtlasButtonComponent,
    AtlasCardComponent,
    AtlasLiveSensorMetricsComponent,
    AtlasLiveSensorFeedTableComponent,
  ],
  templateUrl: './live-sensors.component.html',
  styleUrl: './live-sensors.component.scss',
})
export class LiveSensorsComponent extends AppBase implements OnDestroy {
  private readonly liveSensorsFacade = inject(LiveSensorsFacade);
  private readonly authFacade = inject(AuthFacade);

  /**
   * Base translation point for live sensors
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.liveSensors.itemsBaseTranslationKey;

  /**
   * Store Signals
   */
  readonly isStreaming = this.liveSensorsFacade.isStreaming;
  readonly isLoading = this.liveSensorsFacade.isLoading;
  readonly latestTelemetry = this.liveSensorsFacade.latestTelemetry;
  readonly streamHistory = this.liveSensorsFacade.streamHistory;
  readonly error = this.liveSensorsFacade.error;

  /**
   * Toggle SSE Stream
   */
  toggleStream(): void {
    if (this.isStreaming()) {
      this.liveSensorsFacade.stopStream();
    } else {
      const selectedTenant = this.authFacade.selectedTenant();
      const tenantId = selectedTenant?.tenantId || 'TENANT-MOSTAFA-ELSHERBINIY';
      this.liveSensorsFacade.startStream(tenantId);
    }
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.liveSensorsFacade.stopStream();
  }
}
