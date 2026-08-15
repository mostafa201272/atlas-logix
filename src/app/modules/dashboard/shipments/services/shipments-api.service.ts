import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@core/services/http.service';
import { SHIPMENTS_APIS } from '@utilities/apis/modules/shipments/shipments.apis';
import {
  IShipment,
  IShipmentsApiResponse,
  ISensorHistoryApiResponse,
  IComplianceReportResponse,
  IAuditLogsApiResponse,
} from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ShipmentsApiService {
  /**
   * Inject HttpService
   */
  private readonly httpService = inject(HttpService);

  /**
   * GET - Load Shipments List for Tenant (/api/v1/tenants/:tenantId/shipments?ordering=-last_updated)
   */
  getShipments(tenantId: string): Observable<IShipmentsApiResponse> {
    return this.httpService.getData<IShipmentsApiResponse>(SHIPMENTS_APIS.SHIPMENTS(tenantId));
  }

  /**
   * GET - Load Shipment Details (/api/v1/shipments/:shipmentId)
   */
  getShipmentDetails(shipmentId: string): Observable<IShipment> {
    return this.httpService.getData<IShipment>(SHIPMENTS_APIS.SHIPMENT_DETAILS(shipmentId));
  }

  /**
   * GET - Load Sensor History (/api/v1/shipments/:shipmentId/sensor-data/history?limit=50)
   */
  getSensorHistory(shipmentId: string, limit: number = 50): Observable<ISensorHistoryApiResponse> {
    return this.httpService.getData<ISensorHistoryApiResponse>(
      SHIPMENTS_APIS.SHIPMENTS_SENSOR_HISTORY(shipmentId),
      { limit: limit.toString() },
    );
  }

  /**
   * GET - Load Compliance Report (/api/v1/shipments/:shipmentId/compliance/report)
   */
  getComplianceReport(shipmentId: string): Observable<IComplianceReportResponse> {
    return this.httpService.getData<IComplianceReportResponse>(
      SHIPMENTS_APIS.SHIPMENTS_COMPLIANCE_REPORT(shipmentId),
    );
  }

  /**
   * POST - Approve Compliance (/api/v1/shipments/:shipmentId/compliance/approve)
   */
  approveCompliance(shipmentId: string): Observable<IComplianceReportResponse> {
    return this.httpService.postData<IComplianceReportResponse>(
      SHIPMENTS_APIS.SHIPMENT_COMPLIANCE_APPROVE(shipmentId),
    );
  }

  /**
   * POST - Reject Compliance (/api/v1/shipments/:shipmentId/compliance/reject)
   */
  rejectCompliance(shipmentId: string): Observable<IComplianceReportResponse> {
    return this.httpService.postData<IComplianceReportResponse>(
      SHIPMENTS_APIS.SHIPMENT_COMPLIANCE_REJECT(shipmentId),
    );
  }

  /**
   * GET - Load Audit Logs (/api/v1/audit-logs?entity=shipment&entityId=:shipmentId)
   */
  getAuditLogs(shipmentId: string): Observable<IAuditLogsApiResponse> {
    return this.httpService.getData<IAuditLogsApiResponse>(
      SHIPMENTS_APIS.SHIPMENTS_AUDIT_LOGS(shipmentId),
    );
  }
}
