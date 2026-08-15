const BASE_URL = 'https://assessment.nexus-grid.ai/api/v1';
export const environment = {
  isProduction: false,
  auth: `${BASE_URL}/auth`,
  shipments: `${BASE_URL}/shipments`,
  tenants: `${BASE_URL}/tenants`,
  stream: `${BASE_URL}/stream`,
  auditLogs: `${BASE_URL}/audit-logs`,
};
