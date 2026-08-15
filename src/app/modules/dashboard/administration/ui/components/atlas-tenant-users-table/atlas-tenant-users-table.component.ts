import { Component, computed, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AppBase } from '@core/bases/app-base.base';
import { AtlasStatusBadgeComponent } from '@shared/ui/atoms/atlas-status-badge/atlas-status-badge.component';
import { TBadgeStatus } from '@shared/ui/atoms/atlas-status-badge/models/types/badge-status.type';
import { AdministrationFacade } from '../../../facade/administration.facade';
import { ITenantUser } from '../../../models/interfaces';
import { TranslatePipe } from '@ngx-translate/core';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';

@Component({
  selector: 'atlas-tenant-users-table',
  imports: [TranslatePipe, TableModule, AtlasStatusBadgeComponent, AtlasButtonComponent],
  templateUrl: './atlas-tenant-users-table.component.html',
  styleUrl: './atlas-tenant-users-table.component.scss',
})
export class AtlasTenantUsersTableComponent extends AppBase {
  private readonly adminFacade = inject(AdministrationFacade);

  /**
   * Base translation point for administration
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.administration.itemsBaseTranslationKey;

  cols = [
    { field: 'user', header: 'user' },
    { field: 'role', header: 'role' },
    { field: 'access', header: 'access' },
    { field: 'status', header: 'status' },
    { field: 'actions', header: '' },
  ];

  /**
   * Computed table rows from selected tenant users in AdministrationStore
   */
  tableUsers = computed(() => {
    const rawUsers: ITenantUser[] = this.adminFacade.tenantUsers() || [];
    return rawUsers.map((u: ITenantUser) => {
      const name = u.tenantId.split('-')?.filter((e: string) => e !== 'TENANT');

      return {
        ...u,
        name: name.join(' ')?.toLocaleLowerCase(),
        characters: `${name?.[0]?.charAt(0)}${name?.[name.length - 1]?.charAt(0)}`,
        user: u.email || u.userId,
        role: u.role || '—',
        permissionsCount: u.permissions?.length || 0,
        status: (u.isActive ? 'success' : 'fail') as TBadgeStatus,
        statusLabel: u.isActive ? 'status.active' : 'status.inactive',
      };
    });
  });
}
