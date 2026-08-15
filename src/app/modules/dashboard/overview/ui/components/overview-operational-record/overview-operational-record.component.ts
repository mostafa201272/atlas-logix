import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { AtlasStatusBadgeComponent } from '@shared/ui/atoms/atlas-status-badge/atlas-status-badge.component';

@Component({
  selector: 'atlas-overview-operational-record',
  imports: [TranslatePipe, DatePipe, AtlasStatusBadgeComponent],
  templateUrl: './overview-operational-record.component.html',
  styleUrl: './overview-operational-record.component.scss',
})
export class OverviewOperationalRecordComponent {
  /** Required - Shipment ID */
  shipmentID = input.required<string>();

  /** Required - Shipment Route */
  shipmentRoute = input.required<string>();

  /** Required - Status */
  status = input.required<'success' | 'pending' | 'fail' | 'neutral'>();

  /** Optional - Timestamp */
  timestamp = input<string>();
}
