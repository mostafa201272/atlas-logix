import { Component, output } from '@angular/core';
import { AtlasLangSwitchComponent } from '@shared/ui/atoms/atlas-lang-switch/atlas-lang-switch.component';
import { AtlasProfileComponent } from '@shared/ui/organisms/atlas-profile/atlas-profile.component';
import { AtlasTenantsComponent } from '@shared/ui/organisms/atlas-tenants/atlas-tenants.component';
import { AtlasButtonComponent } from '@shared/ui/atoms/atlas-button/atlas-button.component';

@Component({
  selector: 'atlas-navbar',
  imports: [
    AtlasLangSwitchComponent,
    AtlasProfileComponent,
    AtlasTenantsComponent,
    AtlasButtonComponent,
  ],
  templateUrl: './atlas-navbar.component.html',
  styleUrl: './atlas-navbar.component.scss',
})
export class AtlasNavbarComponent {
  /**
   * Emitter - Sidebar toggler
   */
  onSidebarTogglerClick = output<void>();
}
