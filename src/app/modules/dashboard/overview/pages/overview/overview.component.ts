import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AppBase } from '@core/bases/app-base.base';
import { AtlasDashboardHeaderComponent } from '@shared/ui/atoms/atlas-dashboard-header/atlas-dashboard-header.component';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';
import { AtlasCardComponent } from '@shared/ui/molecules/atlas-card/atlas-card.component';
import { OverviewMetricComponent } from '../../ui/components/overview-metric/overview-metric.component';
import { OverviewOperationalRecordComponent } from '../../ui/components/overview-operational-record/overview-operational-record.component';

@Component({
  selector: 'atlas-overview',
  imports: [
    TranslatePipe,
    AtlasDashboardHeaderComponent,
    AtlasButtonComponent,
    AtlasCardComponent,
    OverviewMetricComponent,
    OverviewOperationalRecordComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent extends AppBase {
  /**
   * Base translation point for overview
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.overview.itemsBaseTranslationKey;

  /**
   * HOLDER - METRICS
   */
  readonly metrics = [
    {
      titleKey: `${this.baseTranslationPoint}metrics.onTimeDepartures`,
      value: '100',
      detailsKey: `${this.baseTranslationPoint}metrics.target`,
      detailsParams: { percentage: '95', current: 114, total: 120 },
      symbol: 'S',
    },
    {
      titleKey: `${this.baseTranslationPoint}metrics.onTimeArrivals`,
      value: '100',
      detailsKey: `${this.baseTranslationPoint}metrics.target`,
      detailsParams: { percentage: '95', current: 114, total: 120 },
      symbol: 'S',
    },
    {
      titleKey: `${this.baseTranslationPoint}metrics.onTimeDepartures`,
      value: '100',
      detailsKey: `${this.baseTranslationPoint}metrics.target`,
      detailsParams: { percentage: '95', current: 114, total: 120 },
      symbol: 'S',
    },
    {
      titleKey: `${this.baseTranslationPoint}metrics.onTimeDepartures`,
      value: '100',
      detailsKey: `${this.baseTranslationPoint}metrics.target`,
      detailsParams: { percentage: '95', current: 114, total: 120 },
      symbol: 'S',
    },
  ];
}
