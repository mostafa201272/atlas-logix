import { Injectable, inject } from '@angular/core';
import { ShipmentsStore } from '../store/shipments.store';
import { AuthFacade } from '@modules/auth/facade/auth.facade';
import { IShipment } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ShipmentsFacade {
  /**
   * INJECTIONS - Shipments Store & Auth Facade
   */
  private readonly shipmentsStore = inject(ShipmentsStore);
  private readonly authFacade = inject(AuthFacade);

  /**
   * STORE SIGNALS
   */
  readonly shipments = this.shipmentsStore.shipments;
  readonly selectedShipment = this.shipmentsStore.selectedShipment;
  readonly count = this.shipmentsStore.count;
  readonly sensorHistory = this.shipmentsStore.sensorHistory;
  readonly complianceReport = this.shipmentsStore.complianceReport;
  readonly auditLogs = this.shipmentsStore.auditLogs;
  readonly isLoading = this.shipmentsStore.isLoading;
  readonly isLoadingDetails = this.shipmentsStore.isLoadingDetails;
  readonly error = this.shipmentsStore.error;
  readonly shipmentsCount = this.shipmentsStore.shipmentsCount;
  readonly totalCount = this.shipmentsStore.totalCount;

  /**
   * Fetch Shipments for tenant (defaults to AuthFacade selectedTenant)
   */
  loadShipments(tenantId?: string): void {
    const targetTenantId = tenantId || this.authFacade.selectedTenant()?.tenantId || '';
    this.shipmentsStore.loadShipments(targetTenantId);
  }

  /**
   * Fetch Sensor History
   */
  loadSensorHistory(shipmentId: string, limit?: number): void {
    this.shipmentsStore.loadSensorHistory({ shipmentId, limit });
  }

  /**
   * Fetch Compliance Report
   */
  loadComplianceReport(shipmentId: string): void {
    this.shipmentsStore.loadComplianceReport(shipmentId);
  }

  /**
   * Change Compliance Status (Approve / Reject)
   */
  changeComplianceStatus(
    shipmentId: string,
    status: 'APPROVED' | 'REJECTED' | 'APPROVE' | 'REJECT',
  ): void {
    this.shipmentsStore.changeComplianceStatus({ shipmentId, status });
  }

  /**
   * Fetch Audit Logs
   */
  loadAuditLogs(shipmentId: string): void {
    this.shipmentsStore.loadAuditLogs(shipmentId);
  }

  /**
   * Set Selected Shipment
   */
  setSelectedShipment(shipment: IShipment | null): void {
    this.shipmentsStore.setSelectedShipment(shipment);
  }

  /**
   * Reset Store
   */
  reset(): void {
    this.shipmentsStore.reset();
  }
}
