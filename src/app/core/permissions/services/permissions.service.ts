import { Injectable, computed, inject } from '@angular/core';
import { AuthFacade } from '@modules/auth/facade/auth.facade';
import { EPermission } from '../models/enums/permissions.enum';
import { ROLE_PERMISSIONS_MAP } from '../models/configs/permissions.config';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  private readonly authFacade = inject(AuthFacade);

  /**
   * Computed current user permissions array based on active role
   */
  readonly userPermissions = computed(() => {
    const role = this.authFacade.userRole() || 'VIEWER';
    return ROLE_PERMISSIONS_MAP[role] || ROLE_PERMISSIONS_MAP['VIEWER'] || [];
  });

  /**
   * Check if current user has a specific permission or set of permissions
   * @param permission Single permission or array of permissions
   */
  hasPermission(permission: EPermission | EPermission[]): boolean {
    const activePermissions = this.userPermissions();
    if (Array.isArray(permission)) {
      return permission.some((p) => activePermissions.includes(p));
    }
    return activePermissions.includes(permission);
  }

  /**
   * Check if current user has a specific role or set of roles
   * @param role Single role or array of roles
   */
  hasRole(role: string | string[]): boolean {
    const activeRole = this.authFacade.userRole();
    if (Array.isArray(role)) {
      return role.includes(activeRole);
    }
    return activeRole === role;
  }
}
