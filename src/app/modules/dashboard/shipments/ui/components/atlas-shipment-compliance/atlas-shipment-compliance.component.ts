import { Component, inject, input, OnInit } from '@angular/core';
import { AppBase } from '@core/bases/app-base.base';
import { ShipmentsFacade } from '../../../facade/shipments.facade';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';

@Component({
  selector: 'atlas-shipment-compliance',
  imports: [AtlasButtonComponent],
  templateUrl: './atlas-shipment-compliance.component.html',
  styleUrl: './atlas-shipment-compliance.component.scss',
})
export class AtlasShipmentComplianceComponent extends AppBase implements OnInit {
  private readonly shipmentsFacade = inject(ShipmentsFacade);

  /**
   * Required - Shipment ID
   */
  shipmentId = input.required<string>();

  /**
   * Signal - Compliance Report from store
   */
  readonly report = this.shipmentsFacade.complianceReport;

  ngOnInit(): void {
    if (this.shipmentId()) {
      this.shipmentsFacade.loadComplianceReport(this.shipmentId());
    }
  }

  /**
   * Changes the compliance status of the shipment and updates the audit logs.
   * @param status The compliance status.
   */
  changeComplianceStatus(status: 'APPROVED' | 'REJECTED' | 'APPROVE' | 'REJECT') {
    if (this.shipmentId()) {
      this.shipmentsFacade.changeComplianceStatus(this.shipmentId(), status);
    }
  }
}
