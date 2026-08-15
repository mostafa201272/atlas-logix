import { environment } from '@environments/environment';

/**
 * SHIPMENTS BASE URL
 */
const tenants = environment.tenants;
const shipments = environment.shipments;

/**
 * SHIPMENTS APIs
 */
export const SHIPMENTS_APIS = {
  SHIPMENTS: (tenantId: string) => `${tenants}/${tenantId}/shipments?ordering=-last_updated`,
  SHIPMENT_DETAILS: (shipmentId: string) => `${shipments}/${shipmentId}`,
  SHIPMENTS_SENSOR_HISTORY: (shipmentId: string) =>
    `${shipments}/${shipmentId}/sensor-data/history`,
  SHIPMENTS_SENSOR_DATA: (shipmentId: string) => `${shipments}/${shipmentId}/sensor-data`,
  SHIPMENTS_COMPLIANCE_REPORT: (shipmentId: string) =>
    `${shipments}/${shipmentId}/compliance/report`,
};
