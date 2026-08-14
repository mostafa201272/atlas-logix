import { Component, input } from '@angular/core';

@Component({
  selector: 'atlas-dashboard-header',
  imports: [],
  templateUrl: './atlas-dashboard-header.component.html',
  styleUrl: './atlas-dashboard-header.component.scss',
})
export class AtlasDashboardHeaderComponent {
  /**
   * Required - Title
   */
  title = input.required<string>();

  /**
   * Optional - Eyebrow
   */
  eyebrow = input<string>();

  /**
   * Optional - Subtitle
   */
  subTitle = input<string>();
}
