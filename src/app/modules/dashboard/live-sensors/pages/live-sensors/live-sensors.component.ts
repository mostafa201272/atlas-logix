import { Component } from '@angular/core';
import { AtlasDashboardHeaderComponent } from '@shared/ui/atoms/atlas-dashboard-header/atlas-dashboard-header.component';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';

@Component({
  selector: 'atlas-live-sensors',
  imports: [AtlasDashboardHeaderComponent, AtlasButtonComponent],
  templateUrl: './live-sensors.component.html',
  styleUrl: './live-sensors.component.scss',
})
export class LiveSensorsComponent {}
