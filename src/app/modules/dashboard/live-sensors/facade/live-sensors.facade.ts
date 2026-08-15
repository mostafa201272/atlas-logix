import { Injectable, inject } from '@angular/core';
import { LiveSensorsStore } from '../store/live-sensors.store';

@Injectable({
  providedIn: 'root',
})
export class LiveSensorsFacade {
  private readonly liveSensorsStore = inject(LiveSensorsStore);

  /**
   * STORE SIGNALS
   */
  readonly isStreaming = this.liveSensorsStore.isStreaming;
  readonly ticket = this.liveSensorsStore.ticket;
  readonly latestTelemetry = this.liveSensorsStore.latestTelemetry;
  readonly streamHistory = this.liveSensorsStore.streamHistory;
  readonly isLoading = this.liveSensorsStore.isLoading;
  readonly error = this.liveSensorsStore.error;
  readonly historyCount = this.liveSensorsStore.historyCount;
  readonly hasTelemetry = this.liveSensorsStore.hasTelemetry;

  /**
   * Start Live Sensor Stream
   */
  startStream(tenantId: string): void {
    this.liveSensorsStore.startStream(tenantId);
  }

  /**
   * Stop Stream
   */
  stopStream(): void {
    this.liveSensorsStore.stopStream();
  }

  /**
   * Reset Store
   */
  reset(): void {
    this.liveSensorsStore.reset();
  }
}
