import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AppBase } from '@core/bases/app-base.base';
import { AtlasStatusBadgeComponent } from '@shared/ui/atoms/atlas-status-badge/atlas-status-badge.component';
import { TBadgeStatus } from '@shared/ui/atoms/atlas-status-badge/models/types/badge-status.type';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';
import { AdministrationFacade } from '../../../facade/administration.facade';
import { ITenantUser } from '../../../models/interfaces';
import { USER_ROLES } from '../../../models/configs/user-roles.config';

@Component({
  selector: 'atlas-tenant-users-table',
  imports: [
    FormsModule,
    TranslatePipe,
    TableModule,
    SelectModule,
    AtlasStatusBadgeComponent,
    AtlasButtonComponent,
  ],
  templateUrl: './atlas-tenant-users-table.component.html',
  styleUrl: './atlas-tenant-users-table.component.scss',
})
export class AtlasTenantUsersTableComponent extends AppBase {
  private readonly adminFacade = inject(AdministrationFacade);
  private readonly translateService = inject(TranslateService);

  /**
   * Base translation point for administration
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.administration.itemsBaseTranslationKey;

  /**
   * Roles configuration mapped with translated names
   */
  readonly roles = computed(() => {
    return USER_ROLES.map((r) => ({
      key: r.key,
      name: this.translateService.instant(r.translateKey),
    }));
  });

  /**
   * Table columns configuration
   */
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
        selectedRole: u.role || 'VIEWER',
        permissionsCount: u.permissions?.length || 0,
        status: (u.isActive ? 'success' : 'fail') as TBadgeStatus,
        statusLabel: u.isActive ? 'status.active' : 'status.inactive',
      };
    });
  });

  /**
   * Trigger role update POST request and show notification toast
   * @param user Target tenant user
   * @param selectedRole Selected role value from p-select
   */
  onRoleChange(user: any, selectedRole: any): void {
    const roleKey = typeof selectedRole === 'string' ? selectedRole : selectedRole?.key;
    const tenantId = user?.tenantId || this.adminFacade.selectedTenantId();
    const userId = user?.userId;

    if (!roleKey || !tenantId || !userId) {
      return;
    }

    const isActive = user?.isActive ?? true;

    this.adminFacade.updateTenantUserRole(tenantId, userId, roleKey, isActive).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translateService.instant('status.success'),
          detail: 'User role updated successfully',
        });
        this.adminFacade.loadTenantUsers(tenantId);
      },
      error: (err: any) => {
        const errorDetail = err?.error?.message || err?.message || 'Failed to update user role';
        this.messageService.add({
          severity: 'error',
          summary: this.translateService.instant('status.error'),
          detail: errorDetail,
        });
      },
    });
  }
}
