import { Component, inject, OnInit } from '@angular/core';
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
    AtlasDashboardHeaderComponent,
    AtlasButtonComponent,
    AtlasCardComponent,
    AtlasTenantListItemComponent,
    AtlasTenantUsersTableComponent,
  ],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss',
})
export class AdministrationComponent implements OnInit {
  private readonly adminFacade = inject(AdministrationFacade);

  tenants = this.adminFacade.tenants;
  selectedTenant = this.adminFacade.selectedTenant;

  ngOnInit(): void {
    this.adminFacade.loadTenants();
  }

  handleSelectTenant(tenant: ITenant): void {
    this.adminFacade.setSelectedTenant(tenant);
  }
}
