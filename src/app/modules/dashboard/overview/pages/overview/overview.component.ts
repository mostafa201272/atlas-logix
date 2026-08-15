import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { AppBase } from '@core/bases/app-base.base';
import { TranslatePipe } from '@ngx-translate/core';
import { AtlasDashboardHeaderComponent } from '@shared/ui/atoms/atlas-dashboard-header/atlas-dashboard-header.component';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';
import { AtlasCardComponent } from '@shared/ui/molecules/atlas-card/atlas-card.component';
import { OverviewMetricComponent } from '../../ui/components/overview-metric/overview-metric.component';
import { OverviewOperationalRecordComponent } from '../../ui/components/overview-operational-record/overview-operational-record.component';
import { ShipmentsFacade } from '@modules/dashboard/shipments/facade/shipments.facade';
import { AuthFacade } from '@modules/auth/facade/auth.facade';
import { IShipment } from '@modules/dashboard/shipments/models/interfaces';
import { OverviewComplianceDistributionChartComponent } from '../../ui/components/overview-compliance-distribution-chart/overview-compliance-distribution-chart.component';

@Component({
  selector: 'atlas-overview',
  imports: [
    TranslatePipe,
    AtlasDashboardHeaderComponent,
    AtlasButtonComponent,
    AtlasCardComponent,
    OverviewMetricComponent,
    OverviewOperationalRecordComponent,
    OverviewComplianceDistributionChartComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent extends AppBase implements OnInit {
  private readonly shipmentsFacade = inject(ShipmentsFacade);
  private readonly authFacade = inject(AuthFacade);

  /**
   * Base translation point for overview
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.overview.itemsBaseTranslationKey;

  /**
   * Signal - Shipments list from store
   */
  readonly shipments = this.shipmentsFacade.shipments;

  constructor() {
    super();
    effect(() => {
      const tenant = this.authFacade.selectedTenant();
      if (tenant?.tenantId) {
        this.shipmentsFacade.loadShipments(tenant.tenantId);
      }
    });
  }

  ngOnInit(): void {
    this.shipmentsFacade.loadShipments();
  }

  /**
   * Navigate to Shipments page
   */
  navigateToShipments(): void {
    this.router.navigate([this.MODULES_ROUTES.modules.dashboard.shipments.route]);
  }

  /**
   * DYNAMIC METRICS COMPUTED FROM STORE
   */
  readonly metrics = computed(() => {
    const list: IShipment[] = this.shipments() || [];
    const total = list.length;
    const inTransit = list.filter((s) => s.status === 'IN_TRANSIT').length;
    const approved = list.filter((s) => s.compliance_status === 'APPROVED').length;
    const needsAttention = list.filter(
      (s) => s.compliance_status === 'PENDING' || s.compliance_status === 'REJECTED',
    ).length;

    return [
      {
        titleKey: `${this.baseTranslationPoint}metrics.totalShipments`,
        value: total.toString(),
        detailsKey: `${this.baseTranslationPoint}metrics.acrossSelectedTenant`,
        symbol: 'S',
        symbolColor: 'text-blue',
        symbolBackground: 'bg-blue/10',
      },
      {
        titleKey: `${this.baseTranslationPoint}metrics.inTransit`,
        value: inTransit.toString(),
        detailsKey: `${this.baseTranslationPoint}metrics.currentlyMoving`,
        symbol: 'T',
        symbolColor: 'text-cyan',
        symbolBackground: 'bg-cyan/10',
      },
      {
        titleKey: `${this.baseTranslationPoint}metrics.approved`,
        value: approved.toString(),
        detailsKey: `${this.baseTranslationPoint}metrics.complianceLocked`,
        symbol: 'A',
        symbolColor: 'text-teal-light',
        symbolBackground: 'bg-teal-light/10',
      },
      {
        titleKey: `${this.baseTranslationPoint}metrics.needsAttention`,
        value: needsAttention.toString(),
        detailsKey: `${this.baseTranslationPoint}metrics.pendingOrRejected`,
        symbol: '!',
        symbolColor: 'text-orange',
        symbolBackground: 'bg-orange/10',
      },
    ];
  });

  /**
   * Recent 5 shipments for operational records list
   */
  readonly recentShipments = computed(() => {
    const list: IShipment[] = this.shipments() || [];
    return list.slice(0, 5).map((s: IShipment) => {
      const statusBadgeMap: Record<string, 'success' | 'pending' | 'fail' | 'neutral'> = {
        APPROVED: 'success',
        DELIVERED: 'success',
        PENDING: 'pending',
        IN_TRANSIT: 'neutral',
        REJECTED: 'fail',
        CANCELLED: 'fail',
      };

      const mappedStatus =
        statusBadgeMap[s.compliance_status] || statusBadgeMap[s.status] || 'neutral';

      return {
        shipmentID: s.tracking_reference || s.shipmentId,
        shipmentRoute: `${s.origin} → ${s.destination}`,
        status: mappedStatus,
        timestamp: s.last_updated,
      };
    });
  });
}
