import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AdministrationStore } from '../store/administration.store';
import { AdministrationApiService } from '../services/administration-api.service';
import { ITenant } from '@modules/auth/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AdministrationFacade {
  /**
   * INJECTIONS - Administration Store & API Service
   */
  private readonly adminStore = inject(AdministrationStore);
  private readonly adminApiService = inject(AdministrationApiService);

  /**
   * STORE SIGNALS
   */
  readonly tenants = this.adminStore.tenants;
  readonly selectedTenant = this.adminStore.selectedTenant;
  readonly tenantUsers = this.adminStore.tenantUsers;
  readonly isLoading = this.adminStore.isLoading;
  readonly error = this.adminStore.error;
  readonly tenantsCount = this.adminStore.tenantsCount;
  readonly selectedTenantId = this.adminStore.selectedTenantId;

  /**
   * Fetch Tenants List
   */
  loadTenants(): void {
    this.adminStore.loadTenants();
  }

  /**
   * Update Selected Tenant
   */
  setSelectedTenant(tenant: ITenant): void {
    this.adminStore.setSelectedTenant(tenant);
  }

  /**
   * Fetch Tenant Users
   */
  loadTenantUsers(tenantId: string, userId?: string): void {
    this.adminStore.loadTenantUsers({ tenantId, userId });
  }

  /**
   * Update Tenant User Role (/api/v1/tenants/:tenantId/users/:userId)
   */
  updateTenantUserRole(
    tenantId: string,
    userId: string,
    role: string,
    isActive: boolean = true,
  ): Observable<any> {
    return this.adminApiService.updateTenantUserRole(tenantId, userId, role, isActive);
  }

  /**
   * Reset Store
   */
  reset(): void {
    this.adminStore.reset();
  }
}
