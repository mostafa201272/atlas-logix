import { Component, computed, inject, input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AppBase } from '@core/bases/app-base.base';
import { AtlasStatusBadgeComponent } from '@shared/ui/atoms/atlas-status-badge/atlas-status-badge.component';
import { TBadgeStatus } from '@shared/ui/atoms/atlas-status-badge/models/types/badge-status.type';
import { ShipmentsFacade } from '../../../facade/shipments.facade';
import { ISensorHistoryItem } from '../../../models/interfaces';

@Component({
  selector: 'atlas-shipment-sensor-history',
  imports: [DatePipe, TableModule, AtlasStatusBadgeComponent],
  templateUrl: './atlas-shipment-sensor-history.component.html',
  styleUrl: './atlas-shipment-sensor-history.component.scss',
})
export class AtlasShipmentSensorHistoryComponent extends AppBase implements OnInit {
  private readonly shipmentsFacade = inject(ShipmentsFacade);

  /**
   * Required - Shipment ID
   */
  shipmentId = input.required<string>();

  cols = [
    { field: 'timestamp', header: 'Timestamp' },
    { field: 'temperature', header: 'Temperature' },
    { field: 'humidity', header: 'Humidity' },
    { field: 'vibration', header: 'Vibration' },
    { field: 'batteryLevel', header: 'Battery' },
    { field: 'confidence', header: 'Confidence' },
  ];

  /**
   * Computed sensor history rows
   */
  historyData = computed(() => {
    const raw: ISensorHistoryItem[] = this.shipmentsFacade.sensorHistory() || [];
    return raw.map((item: ISensorHistoryItem) => {
      const confidenceBadgeMap: Record<string, { status: TBadgeStatus; label: string }> = {
        HIGH: { status: 'success', label: 'HIGH' },
        MEDIUM: { status: 'pending', label: 'MEDIUM' },
        LOW: { status: 'fail', label: 'LOW' },
      };

      const confInfo = confidenceBadgeMap[item.confidence] || {
        status: 'neutral' as TBadgeStatus,
        label: item.confidence,
      };

      return {
        ...item,
        temperatureFormatted: `${item.temperature} °C`,
        humidityFormatted: `${item.humidity}%`,
        vibrationFormatted: `${item.vibration} g`,
        batteryFormatted: `${item.battery_level}%`,
        confidenceStatus: confInfo.status,
        confidenceLabel: confInfo.label,
      };
    });
  });

  ngOnInit(): void {
    if (this.shipmentId()) {
      this.shipmentsFacade.loadSensorHistory(this.shipmentId());
    }
  }
}
