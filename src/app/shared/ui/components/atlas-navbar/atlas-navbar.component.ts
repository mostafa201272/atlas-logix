import { Component } from '@angular/core';
import { AtlasLangSwitchComponent } from '@shared/ui/atoms/atlas-lang-switch/atlas-lang-switch.component';
import { AtlasProfileComponent } from '@shared/ui/organisms/atlas-profile/atlas-profile.component';
import { AtlasTenantsComponent } from '@shared/ui/organisms/atlas-tenants/atlas-tenants.component';

@Component({
  selector: 'atlas-navbar',
  imports: [AtlasLangSwitchComponent, AtlasProfileComponent, AtlasTenantsComponent],
  templateUrl: './atlas-navbar.component.html',
  styleUrl: './atlas-navbar.component.scss',
})
export class AtlasNavbarComponent {}
