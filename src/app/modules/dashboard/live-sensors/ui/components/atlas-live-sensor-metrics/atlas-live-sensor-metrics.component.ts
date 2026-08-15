import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { AppBase } from '@core/bases/app-base.base';
import { AtlasStatusBadgeComponent } from '@shared/ui/atoms/atlas-status-badge/atlas-status-badge.component';
import { ISensorTelemetry } from '../../../models/interfaces';

@Component({
  selector: 'atlas-live-sensor-metrics',
  imports: [DecimalPipe, TranslatePipe, AtlasStatusBadgeComponent],
  templateUrl: './atlas-live-sensor-metrics.component.html',
})
export class AtlasLiveSensorMetricsComponent extends AppBase {
  telemetry = input<ISensorTelemetry | null>(null);

  /**
   * Base translation point for live sensors metrics
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.liveSensors.itemsBaseTranslationKey + 'metrics.';

  getConfidenceBadge(confidence?: string): 'success' | 'pending' | 'fail' | 'neutral' {
    if (!confidence) return 'neutral';
    switch (confidence.toUpperCase()) {
      case 'HIGH':
        return 'success';
      case 'MEDIUM':
        return 'pending';
      case 'LOW':
        return 'fail';
      default:
        return 'neutral';
    }
  }
}
