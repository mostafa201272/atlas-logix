import { Component, input } from '@angular/core';
import { AtlasStatusBadgeComponent } from '@shared/ui/atoms/atlas-status-badge/atlas-status-badge.component';

@Component({
  selector: 'atlas-overview-operational-record',
  imports: [AtlasStatusBadgeComponent],
  templateUrl: './overview-operational-record.component.html',
  styleUrl: './overview-operational-record.component.scss',
})
export class OverviewOperationalRecordComponent {
  /** Required - Shipment ID */
  shipmentID = input.required<string>();

  /** Required - Shipment Route */
  shipmentRoute = input.required<string>();

  /** Required - Status */
  status = input.required<'approved' | 'pending' | 'rejected' | 'neutral'>();
}
