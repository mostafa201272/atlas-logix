import { Injectable, inject } from '@angular/core';
import { AdministrationStore } from '../store/administration.store';
import { ITenant } from '@modules/auth/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AdministrationFacade {
  /**
   * INJECTION - Administration Store
   */
  private readonly adminStore = inject(AdministrationStore);

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
   * Reset Store
   */
  reset(): void {
    this.adminStore.reset();
  }
}
