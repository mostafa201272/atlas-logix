import { EPermission } from '../enums/permissions.enum';

/**
 * Mapping of Roles to Permission lists based on expected RBAC requirements
 */
export const ROLE_PERMISSIONS_MAP: Record<string, EPermission[]> = {
  TENANT_ADMIN: [
    EPermission.TENANT_USER_ADMIN,
    EPermission.AUDIT_LOGS,
    EPermission.LIVE_STREAM,
  ],
  COMPLIANCE_AUDITOR: [
    EPermission.AUDIT_LOGS,
    EPermission.LIVE_STREAM,
    EPermission.APPROVE,
  ],
  OPERATIONS_MANAGER: [
    EPermission.AUDIT_LOGS,
    EPermission.LIVE_STREAM,
  ],
  WAREHOUSE_SUPERVISOR: [
    EPermission.LIVE_STREAM,
  ],
  VIEWER: [
    EPermission.AUDIT_LOGS,
  ],
};
