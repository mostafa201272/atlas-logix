import { DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { DialogBase } from '@core/bases/dialog-base.base';
import { TranslatePipe } from '@ngx-translate/core';
import { AtlasDashboardHeaderComponent } from '@shared/ui/atoms/atlas-dashboard-header/atlas-dashboard-header.component';
import { AtlasStatusBadgeComponent } from '@shared/ui/atoms/atlas-status-badge/atlas-status-badge.component';
import { TBadgeStatus } from '@shared/ui/atoms/atlas-status-badge/models/types/badge-status.type';
import { TabsModule } from 'primeng/tabs';
import { AtlasShipmentOverviewComponent } from '../../components/atlas-shipment-overview/atlas-shipment-overview.component';
import { AtlasShipmentSensorHistoryComponent } from '../../components/atlas-shipment-sensor-history/atlas-shipment-sensor-history.component';
import { AtlasShipmentComplianceComponent } from '../../components/atlas-shipment-compliance/atlas-shipment-compliance.component';
import { AtlasShipmentAuditLogComponent } from '../../components/atlas-shipment-audit-log/atlas-shipment-audit-log.component';
import { ShipmentsFacade } from '../../../facade/shipments.facade';

@Component({
  selector: 'atlas-shipment-details',
  imports: [
    TranslatePipe,
    DatePipe,
    TabsModule,
    AtlasDashboardHeaderComponent,
    AtlasStatusBadgeComponent,
    AtlasShipmentOverviewComponent,
    AtlasShipmentSensorHistoryComponent,
    AtlasShipmentComplianceComponent,
    AtlasShipmentAuditLogComponent,
  ],
  templateUrl: './atlas-shipment-details.component.html',
  styleUrl: './atlas-shipment-details.component.scss',
})
export class AtlasShipmentDetailsComponent extends DialogBase {
  private readonly shipmentsFacade = inject(ShipmentsFacade);

  /**
   * Base translation point for shipments
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.shipments.itemsBaseTranslationKey;

  /**
   * Initial shipment data from dialog config
   */
  readonly rawShipment = this.config.data;

  /**
   * Compliance Report signal from facade
   */
  readonly complianceReport = this.shipmentsFacade.complianceReport;

  /**
   * Reactive shipment computed property combining dialog data with store compliance updates
   */
  shipment = computed(() => {
    const raw = this.rawShipment || {};
    const report = this.complianceReport();

    if (report && report.shipmentId === raw.shipmentId) {
      const complianceBadgeMap: Record<string, { status: TBadgeStatus; label: string }> = {
        APPROVED: { status: 'success', label: 'status.approved' },
        PENDING: { status: 'pending', label: 'status.pending' },
        REJECTED: { status: 'fail', label: 'status.rejected' },
      };

      const complianceInfo = complianceBadgeMap[report.complianceStatus] || {
        status: 'neutral' as TBadgeStatus,
        label: report.complianceStatus,
      };

      return {
        ...raw,
        compliance_status: report.complianceStatus,
        complianceStatus: complianceInfo.status,
        complianceStatusLabel: complianceInfo.label,
      };
    }

    return raw;
  });
}
