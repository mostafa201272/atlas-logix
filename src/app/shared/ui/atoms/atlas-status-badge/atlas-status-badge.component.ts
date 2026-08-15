import { Component, input } from '@angular/core';

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
  status = input.required<'approved' | 'pending' | 'rejected' | 'neutral'>();
}
