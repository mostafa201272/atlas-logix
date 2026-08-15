import {
  IShipment,
  ISensorHistoryItem,
  IComplianceReportResponse,
  IAuditLogItem,
} from './shipment.interface';

/**
 * Shipments State Interface
 */
export interface IShipmentsState {
  shipments: IShipment[];
  selectedShipment: IShipment | null;
  count: number;
  sensorHistory: ISensorHistoryItem[];
  complianceReport: IComplianceReportResponse | null;
  auditLogs: IAuditLogItem[];
  isLoading: boolean;
  isLoadingDetails: boolean;
  error: string | null;
}
