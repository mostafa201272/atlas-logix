import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppBase } from '@core/bases/app-base.base';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { AtlasIdentityComponent } from '@shared/ui/atoms/atlas-identity/atlas-identity.component';
import { extractSubRoutesFn } from '@utilities/helpers/extract-subroutes.helper';
import { PermissionsService } from '@core/permissions/services/permissions.service';
import { EPermission } from '@core/permissions/models/enums/permissions.enum';

@Component({
  selector: 'atlas-sidebar',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, AtlasIdentityComponent],
  templateUrl: './atlas-sidebar.component.html',
  styleUrl: './atlas-sidebar.component.scss',
})
export class AtlasSidebarComponent extends AppBase {
  private readonly permissionsService = inject(PermissionsService);

  private readonly rawNavItems: (MenuItem & { permission?: EPermission })[] = extractSubRoutesFn(
    this.MODULES_ROUTES.modules.dashboard,
  );

  /**
   * DYNAMIC NAVIGATION ITEMS (Filtered by RBAC permissions)
   */
  readonly navItems = computed(() => {
    // Computed dependency on permissions signal
    this.permissionsService.userPermissions();

    return this.rawNavItems.filter((item) => {
      if (!item.permission) {
        return true;
      }
      return this.permissionsService.hasPermission(item.permission);
    });
  });
}
