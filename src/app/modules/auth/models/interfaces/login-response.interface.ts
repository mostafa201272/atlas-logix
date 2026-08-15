/**
 * User Response
 */
export interface IUserResponse {
  email: string;
  role: string;
  tenantId: string;
  userId: string;
  permissions: string[];
  tenants: ITenant[];
}

/**
 * Login Response
 */
export interface ILoginResponse extends IUserResponse {
  token: string;
}

/**
 * Tenant
 */
export interface ITenant {
  tenantId: string;
  name: string;
  region: string;
  role?: string;
  permissions?: string[];
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
