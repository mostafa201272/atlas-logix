/**
 * Shipment Interface
 */
export interface IShipment {
  shipmentId: string;
  tenantId: string;
  tracking_reference: string;
  origin: string;
  destination: string;
  carrier: string;
  cargo_type: string;
  status: string;
  warehouse: string;
  compliance_status: string;
  temperature_min: number;
  temperature_max: number;
  humidity_max: number;
  estimated_arrival: string;
  last_updated: string;
  locked_at: string | null;
  approved_by: string | null;
}

/**
 * Shipments API Response Wrapper
 */
export interface IShipmentsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IShipment[];
}

/**
 * Sensor History Item Interface
 */
export interface ISensorHistoryItem {
  shipmentId: string;
  temperature: number;
  humidity: number;
  vibration: number;
  battery_level: number;
  confidence: string;
  timestamp: string;
}

/**
 * Sensor History API Response Wrapper
 */
export interface ISensorHistoryApiResponse {
  shipmentId: string;
  count: number;
  data: ISensorHistoryItem[];
}

/**
 * Compliance Report Response Interface
 */
export interface IComplianceReportResponse {
  shipmentId: string;
  complianceStatus: 'APPROVED' | 'PENDING' | 'REJECTED';
  sensorConfidence: string;
  latestTemperature: number;
  latestHumidity: number;
  latestVibration: number;
  sensorEventCount: number;
  hasExcursion: boolean;
  generatedAt: string;
}

/**
 * Audit Log Item Interface
 */
export interface IAuditLogItem {
  entity: string;
  entity_id: string;
  field: string;
  before: string;
  after: string;
  changed_by: string;
  timestamp: string;
}

/**
 * Audit Logs API Response Wrapper
 */
export interface IAuditLogsApiResponse {
  data: IAuditLogItem[];
}
