import { Component } from '@angular/core';
import { AtlasDashboardHeaderComponent } from '@shared/ui/atoms/atlas-dashboard-header/atlas-dashboard-header.component';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';

@Component({
  selector: 'atlas-shipments',
  imports: [AtlasDashboardHeaderComponent, AtlasButtonComponent],
  templateUrl: './shipments.component.html',
  styleUrl: './shipments.component.scss',
})
export class ShipmentsComponent {}
