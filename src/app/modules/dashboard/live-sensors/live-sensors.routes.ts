import { Route } from '@angular/router';

export const liveSensorsRoutes: Route[] = [
  {
    path: '',
    loadComponent() {
      return import('./pages/live-sensors/live-sensors.component').then(
        (c) => c.LiveSensorsComponent,
      );
    },
  },
];
