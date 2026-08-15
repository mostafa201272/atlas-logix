import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AppBase } from '@core/bases/app-base.base';
import { AtlasDashboardHeaderComponent } from '@shared/ui/atoms/atlas-dashboard-header/atlas-dashboard-header.component';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';
import { AtlasCardComponent } from '@shared/ui/molecules/atlas-card/atlas-card.component';
import { AtlasTenantListItemComponent } from '../../ui/components/atlas-tenant-list-item/atlas-tenant-list-item.component';
import { AdministrationFacade } from '../../facade/administration.facade';
import { AtlasTenantUsersTableComponent } from '../../ui/components/atlas-tenant-users-table/atlas-tenant-users-table.component';
import { ITenant } from '@modules/auth/models/interfaces';

@Component({
  selector: 'atlas-administration',
  imports: [
    TranslatePipe,
    AtlasDashboardHeaderComponent,
    AtlasButtonComponent,
    AtlasCardComponent,
    AtlasTenantListItemComponent,
    AtlasTenantUsersTableComponent,
  ],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss',
})
export class AdministrationComponent extends AppBase implements OnInit {
  private readonly adminFacade = inject(AdministrationFacade);

  /**
   * Base translation point for administration
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.administration.itemsBaseTranslationKey;

  tenants = this.adminFacade.tenants;
  selectedTenant = this.adminFacade.selectedTenant;

  ngOnInit(): void {
    this.adminFacade.loadTenants();
  }

  handleSelectTenant(tenant: ITenant): void {
    this.adminFacade.setSelectedTenant(tenant);
  }
}
