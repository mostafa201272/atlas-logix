import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'atlas-shipment-overview',
  imports: [DatePipe],
  templateUrl: './atlas-shipment-overview.component.html',
  styleUrl: './atlas-shipment-overview.component.scss',
})
export class AtlasShipmentOverviewComponent {
  /**
   * Required - Shipment
   */
  shipment = input.required<any>();
}
