import { Component, computed, input, output } from '@angular/core';
import { ITenant } from '@modules/auth/models/interfaces';
import { TranslatePipe } from '@ngx-translate/core';
import { AtlasStatusBadgeComponent } from '@shared/ui/atoms/atlas-status-badge/atlas-status-badge.component';
import { TBadgeStatus } from '@shared/ui/atoms/atlas-status-badge/models/types/badge-status.type';

@Component({
  selector: 'atlas-tenant-list-item',
  imports: [TranslatePipe, AtlasStatusBadgeComponent],
  templateUrl: './atlas-tenant-list-item.component.html',
  styleUrl: './atlas-tenant-list-item.component.scss',
})
export class AtlasTenantListItemComponent {
  /**
   * Required - Tenant
   */
  tenant = input.required<ITenant>();
  computedTenant = computed(() => {
    return {
      ...this.tenant(),
      name: this.tenant().name,
      code: this.tenant().tenantId,
      status: (this.tenant().isActive ? 'success' : 'fail') as TBadgeStatus,
      statusLabel: this.tenant().isActive ? 'status.active' : 'status.inactive',
    };
  });

  /**
   * Required - Selected
   */
  selected = input.required<boolean>();

  /**
   * Emitter - On Select
   */
  onSelect = output<void>();
}
