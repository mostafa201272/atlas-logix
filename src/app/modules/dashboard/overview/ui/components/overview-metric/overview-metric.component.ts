import { Component, input } from '@angular/core';

@Component({
  selector: 'atlas-overview-metric',
  imports: [],
  templateUrl: './overview-metric.component.html',
  styleUrl: './overview-metric.component.scss',
})
export class OverviewMetricComponent {
  /**
   * Symbol used to generate the icon for the metric
   */
  symbol = input.required<string>();

  /**
   * Optional - Symbol color & background
   */
  symbolColor = input<string>('text-blue');
  symbolBackground = input<string>('bg-blue/10');

  /**
   * Title of the metric
   */
  title = input.required<string>();

  /**
   * Value of the metric
   */
  value = input.required<string>();

  /**
   * Additional details to show with the metric
   */
  details = input.required<string>();
}
