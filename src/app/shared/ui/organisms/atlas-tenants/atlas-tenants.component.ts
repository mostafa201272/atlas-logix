import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { AtlasLabelComponent } from '@shared/ui/atoms/atlas-label/atlas-label.component';
import { SelectModule } from 'primeng/select';
import { AuthFacade } from '@modules/auth/facade/auth.facade';
import { ITenant } from '@modules/auth/models/interfaces';

@Component({
  selector: 'atlas-tenants',
  imports: [TranslatePipe, FormsModule, SelectModule, AtlasLabelComponent],
  templateUrl: './atlas-tenants.component.html',
  styleUrl: './atlas-tenants.component.scss',
})
export class AtlasTenantsComponent {
  private readonly authFacade = inject(AuthFacade);

  /**
   * REACTIVE STORE SIGNALS
   */
  readonly tenants = this.authFacade.tenants;
  readonly selectedTenant = this.authFacade.selectedTenant;

  /**
   * Handle Tenant Selection Change
   */
  onTenantChange(tenant: ITenant): void {
    if (tenant) {
      this.authFacade.setSelectedTenant(tenant);
    }
  }
}


