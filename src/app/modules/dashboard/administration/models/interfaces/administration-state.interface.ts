import { ITenant } from '@modules/auth/models/interfaces';
import { ITenantUser } from './tenant-user.interface';

/**
 * Tenants API Response Wrapper
 */
export interface ITenantsApiResponse {
  data: ITenant[];
}

/**
 * Administration State Interface
 */
export interface IAdministrationState {
  tenants: ITenant[];
  selectedTenant: ITenant | null;
  tenantUsers: ITenantUser[];
  isLoading: boolean;
  error: string | null;
}
