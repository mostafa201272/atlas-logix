import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { TranslatePipe } from '@ngx-translate/core';
import { AppBase } from '@core/bases/app-base.base';
import { AtlasSidebarComponent } from '@shared/ui/components/atlas-sidebar/atlas-sidebar.component';
import { AtlasNavbarComponent } from '@shared/ui/components/atlas-navbar/atlas-navbar.component';

@Component({
  selector: 'atlas-dashboard-layout',
  imports: [RouterOutlet, ToastModule, TranslatePipe, AtlasSidebarComponent, AtlasNavbarComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
})
export class DashboardLayout {}
