/**
 * Tenant User Interface
 */
export interface ITenantUser {
  userId: string;
  email: string;
  tenantId: string;
  role: string;
  permissions: string[];
  isActive: boolean;
}

/**
 * Tenant Users API Response Wrapper
 */
export interface ITenantUsersApiResponse {
  data: ITenantUser[];
}
