import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@core/services/http.service';
import { TENANTS_APIS } from '@utilities/apis/modules/tenants/tenants.apis';
import { ITenantsApiResponse, ITenantUsersApiResponse } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AdministrationApiService {
  /**
   * Inject HttpService
   */
  private readonly httpService = inject(HttpService);

  /**
   * GET - Load Tenants List (/api/v1/tenants)
   */
  getTenants(): Observable<ITenantsApiResponse> {
    return this.httpService.getData<ITenantsApiResponse>(TENANTS_APIS.TENANTS());
  }

  /**
   * GET - Load Tenant Users List (/api/v1/tenants/:tenantId/users)
   */
  getTenantUsers(tenantId: string, userId?: string): Observable<ITenantUsersApiResponse> {
    const url = userId
      ? TENANTS_APIS.TENANT_USER(tenantId, userId)
      : TENANTS_APIS.TENANTS_USERS(tenantId);
    return this.httpService.getData<ITenantUsersApiResponse>(url);
  }

  /**
   * POST - Update Tenant User Role (/api/v1/tenants/:tenantId/users/:userId)
   */
  updateTenantUserRole(
    tenantId: string,
    userId: string,
    role: string,
    isActive: boolean = true,
  ): Observable<any> {
    return this.httpService.patchData(TENANTS_APIS.TENANT_USER(tenantId, userId), {
      role,
      isActive,
    });
  }
}
