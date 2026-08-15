import { Component, input } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TranslatePipe } from '@ngx-translate/core';
import { AppBase } from '@core/bases/app-base.base';
import { AtlasStatusBadgeComponent } from '@shared/ui/atoms/atlas-status-badge/atlas-status-badge.component';
import { ISensorTelemetry } from '../../../models/interfaces';

@Component({
  selector: 'atlas-live-sensor-feed-table',
  imports: [TableModule, TranslatePipe, DatePipe, DecimalPipe, AtlasStatusBadgeComponent],
  templateUrl: './atlas-live-sensor-feed-table.component.html',
})
export class AtlasLiveSensorFeedTableComponent extends AppBase {
  history = input<ISensorTelemetry[]>([]);

  /**
   * Base translation point for live sensors table
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.liveSensors.itemsBaseTranslationKey + 'table.';

  cols = [
    { field: 'timestamp', header: 'timestamp' },
    { field: 'shipmentId', header: 'shipmentId' },
    { field: 'temperature', header: 'temperature' },
    { field: 'humidity', header: 'humidity' },
    { field: 'vibration', header: 'vibration' },
    { field: 'battery_level', header: 'battery' },
    { field: 'confidence', header: 'confidence' },
  ];

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
