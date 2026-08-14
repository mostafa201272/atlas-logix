import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppBase } from '@core/bases/app-base.base';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { AtlasIdentityComponent } from '@shared/ui/atoms/atlas-identity/atlas-identity.component';
import { extractSubRoutesFn } from '@utilities/helpers/extract-subroutes.helper';

@Component({
  selector: 'atlas-sidebar',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, AtlasIdentityComponent],
  templateUrl: './atlas-sidebar.component.html',
  styleUrl: './atlas-sidebar.component.scss',
})
export class AtlasSidebarComponent extends AppBase {
  /**
   * DYNAMIC NAVIGATION ITEMS
   */
  navItems: MenuItem[] = extractSubRoutesFn(this.MODULES_ROUTES.modules.dashboard);
}
