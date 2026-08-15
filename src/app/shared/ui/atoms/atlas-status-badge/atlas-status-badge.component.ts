import { Component, input } from '@angular/core';
import { TBadgeStatus } from './models/types/badge-status.type';

@Component({
  selector: 'atlas-status-badge',
  imports: [],
  templateUrl: './atlas-status-badge.component.html',
  styleUrl: './atlas-status-badge.component.scss',
})
export class AtlasStatusBadgeComponent {
  /**
   * Required - Status
   */
  status = input.required<TBadgeStatus>();

  /**
   * Required - Status Label
   */
  statusLabel = input.required<string>();
}
