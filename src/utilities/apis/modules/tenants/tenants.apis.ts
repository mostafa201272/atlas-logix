import { environment } from '@environments/environment';

/**
 * TENANTS BASE URL
 */
const tenants = environment.tenants;

/**
 * TENANTS APIs
 */
export const TENANTS_APIS = {
  TENANTS: () => `${tenants}`,
  TENANT: (tenantId: string) => `${tenants}/${tenantId}`,
  TENANTS_USERS: (tenantId: string) => `${tenants}/${tenantId}/users`,
  TENANT_USER: (tenantId: string, userId: string) => `${tenants}/${tenantId}/users/${userId}`,
};
