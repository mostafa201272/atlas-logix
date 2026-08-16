import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { DrawerModule } from 'primeng/drawer';
import { AtlasSidebarComponent } from '@shared/ui/components/atlas-sidebar/atlas-sidebar.component';
import { AtlasNavbarComponent } from '@shared/ui/components/atlas-navbar/atlas-navbar.component';

@Component({
  selector: 'atlas-dashboard-layout',
  imports: [RouterOutlet, ToastModule, DrawerModule, AtlasSidebarComponent, AtlasNavbarComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
})
export class DashboardLayout {
  visible: boolean = false;
  toggleSidebar() {
    this.visible = !this.visible;
  }
}
