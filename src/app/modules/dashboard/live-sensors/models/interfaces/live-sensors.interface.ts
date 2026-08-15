export interface ISensorTelemetry {
  tenantId: string;
  shipmentId: string;
  temperature: number;
  humidity: number;
  vibration: number;
  battery_level: number;
  confidence: string;
  timestamp: string;
}

export interface IStreamTicketResponse {
  ticket?: string;
  ticketId?: string;
  ticket_id?: string;
  data?: {
    ticket?: string;
    ticketId?: string;
    ticket_id?: string;
  };
}
