import { Component, effect, inject, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AppBase } from '@core/bases/app-base.base';
import { AtlasDashboardHeaderComponent } from '@shared/ui/atoms/atlas-dashboard-header/atlas-dashboard-header.component';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';
import { AtlasShipmentsTableComponent } from '../../ui/components/atlas-shipments-table/atlas-shipments-table.component';
import { ShipmentsFacade } from '../../facade/shipments.facade';
import { AuthFacade } from '@modules/auth/facade/auth.facade';

@Component({
  selector: 'atlas-shipments',
  imports: [
    TranslatePipe,
    AtlasDashboardHeaderComponent,
    AtlasButtonComponent,
    AtlasShipmentsTableComponent,
  ],
  templateUrl: './shipments.component.html',
  styleUrl: './shipments.component.scss',
})
export class ShipmentsComponent extends AppBase implements OnInit {
  private readonly shipmentsFacade = inject(ShipmentsFacade);
  private readonly authFacade = inject(AuthFacade);

  /**
   * Base translation point for shipments
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.shipments.itemsBaseTranslationKey;

  /**
   * Reactively reload shipments when selected tenant changes
   */
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

  onRefresh(): void {
    this.shipmentsFacade.loadShipments();
  }
}
