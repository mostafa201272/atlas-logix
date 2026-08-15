import { Component, computed, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AppBase } from '@core/bases/app-base.base';
import { AtlasStatusBadgeComponent } from '@shared/ui/atoms/atlas-status-badge/atlas-status-badge.component';
import { TBadgeStatus } from '@shared/ui/atoms/atlas-status-badge/models/types/badge-status.type';
import { TranslatePipe } from '@ngx-translate/core';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';
import { ShipmentsFacade } from '../../../facade/shipments.facade';
import { IShipment } from '../../../models/interfaces';
import { DatePipe } from '@angular/common';
import { AtlasShipmentDetailsComponent } from '../../dialogs/atlas-shipment-details/atlas-shipment-details.component';

@Component({
  selector: 'atlas-shipments-table',
  imports: [TranslatePipe, DatePipe, TableModule, AtlasStatusBadgeComponent, AtlasButtonComponent],
  templateUrl: './atlas-shipments-table.component.html',
  styleUrl: './atlas-shipments-table.component.scss',
})
export class AtlasShipmentsTableComponent extends AppBase {
  private readonly shipmentsFacade = inject(ShipmentsFacade);

  /**
   * Base translation point for shipments
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.shipments.itemsBaseTranslationKey;

  /**
   * Table columns configuration
   */
  cols = [
    { field: 'shipment', header: 'shipment' },
    { field: 'warehouse', header: 'warehouse' },
    { field: 'status', header: 'status' },
    { field: 'compliance', header: 'compliance' },
    { field: 'lastUpdated', header: 'lastUpdated' },
    { field: 'actions', header: '' },
  ];

  /**
   * Computed table rows from shipments store
   */
  tableData = computed(() => {
    const raw: IShipment[] = this.shipmentsFacade.shipments() || [];
    return raw.map((s: IShipment) => {
      const statusBadgeMap: Record<string, { status: TBadgeStatus; label: string }> = {
        IN_TRANSIT: { status: 'neutral', label: 'status.inTransit' },
        DELIVERED: { status: 'success', label: 'status.delivered' },
        PENDING: { status: 'pending', label: 'status.pending' },
        CANCELLED: { status: 'fail', label: 'status.cancelled' },
      };

      const complianceBadgeMap: Record<string, { status: TBadgeStatus; label: string }> = {
        APPROVED: { status: 'success', label: 'status.approved' },
        PENDING: { status: 'pending', label: 'status.pending' },
        REJECTED: { status: 'fail', label: 'status.rejected' },
      };

      const statusInfo = statusBadgeMap[s.status] || {
        status: 'neutral' as TBadgeStatus,
        label: s.status,
      };
      const complianceInfo = complianceBadgeMap[s.compliance_status] || {
        status: 'neutral' as TBadgeStatus,
        label: s.compliance_status,
      };

      return {
        ...s,
        shipmentId: s.shipmentId,
        trackingReference: s.tracking_reference,
        route: `${s.origin} → ${s.destination}`,
        warehouse: s.warehouse || '—',
        carrier: s.carrier || '—',
        cargoType: s.cargo_type || '—',
        status: statusInfo.status,
        statusLabel: statusInfo.label,
        complianceStatus: complianceInfo.status,
        complianceStatusLabel: complianceInfo.label,
        lastUpdated: s.last_updated ? new Date(s.last_updated).toLocaleDateString() : '—',
      };
    });
  });

  /**
   * Open shipment details dialog
   * @param shipment - Shipment to open details for
   */
  openShipmentDetails(shipment: IShipment) {
    const ref = this.dialogService.open(AtlasShipmentDetailsComponent, {
      header: '',
      closable: true,
      width: '55rem',
      height: '100vh',
      styleClass: 'custom-dynamic-dialog !rounded-none',
      position: 'bottom-right',
      data: shipment,
    });

    ref?.onClose.subscribe((res: any) => {});
  }
}
