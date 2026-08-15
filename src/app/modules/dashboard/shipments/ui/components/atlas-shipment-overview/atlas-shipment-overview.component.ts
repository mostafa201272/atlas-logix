import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { AppBase } from '@core/bases/app-base.base';
import { IShipment } from '../../../models/interfaces';

@Component({
  selector: 'atlas-shipment-overview',
  imports: [DatePipe, TranslatePipe],
  templateUrl: './atlas-shipment-overview.component.html',
  styleUrl: './atlas-shipment-overview.component.scss',
})
export class AtlasShipmentOverviewComponent extends AppBase {
  /**
   * Required - Shipment
   */
  shipment = input.required<IShipment | any>();

  /**
   * Base translation point for overview tab
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.shipments.itemsBaseTranslationKey + 'details.overview.';
}
