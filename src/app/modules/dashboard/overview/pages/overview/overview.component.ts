import { Component, inject } from '@angular/core';
import { AtlasDashboardHeaderComponent } from '@shared/ui/atoms/atlas-dashboard-header/atlas-dashboard-header.component';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';
import { AtlasCardComponent } from '@shared/ui/molecules/atlas-card/atlas-card.component';
import { OverviewMetricComponent } from '../../ui/components/overview-metric/overview-metric.component';
import { OverviewOperationalRecordComponent } from '../../ui/components/overview-operational-record/overview-operational-record.component';
@Component({
  selector: 'atlas-overview',
  imports: [
    AtlasDashboardHeaderComponent,
    AtlasButtonComponent,
    AtlasCardComponent,
    OverviewMetricComponent,
    OverviewOperationalRecordComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  /**
   * HOLDER - METRICS
   */
  readonly metrics = [
    {
      title: 'On-Time Departures',
      value: '100',
      details: 'Target: 95% (114/120)',
      symbol: 'S',
    },
    {
      title: 'On-Time Arrivals',
      value: '100',
      details: 'Target: 95% (114/120)',
      symbol: 'S',
    },
    {
      title: 'On-Time Departures',
      value: '100',
      details: 'Target: 95% (114/120)',
      symbol: 'S',
    },
    {
      title: 'On-Time Departures',
      value: '100',
      details: 'Target: 95% (114/120)',
      symbol: 'S',
    },
  ];
}
