import { Component, computed, inject, input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AppBase } from '@core/bases/app-base.base';
import { ShipmentsFacade } from '../../../facade/shipments.facade';
import { IAuditLogItem } from '../../../models/interfaces';

@Component({
  selector: 'atlas-shipment-audit-log',
  imports: [DatePipe, TableModule],
  templateUrl: './atlas-shipment-audit-log.component.html',
  styleUrl: './atlas-shipment-audit-log.component.scss',
})
export class AtlasShipmentAuditLogComponent extends AppBase implements OnInit {
  private readonly shipmentsFacade = inject(ShipmentsFacade);

  /**
   * Required - Shipment ID
   */
  shipmentId = input.required<string>();

  cols = [
    { field: 'field', header: 'Field' },
    { field: 'before', header: 'Before' },
    { field: 'after', header: 'After' },
    { field: 'changed_by', header: 'Changed By' },
    { field: 'timestamp', header: 'Timestamp' },
  ];

  /**
   * Computed audit log rows
   */
  auditData = computed(() => {
    const raw: IAuditLogItem[] = this.shipmentsFacade.auditLogs() || [];
    return raw.map((item: IAuditLogItem) => ({
      ...item,
      fieldFormatted: item.field ? item.field.replace(/_/g, ' ') : '—',
      beforeValue: item.before || '—',
      afterValue: item.after || '—',
      changedByFormatted: item.changed_by || '—',
    }));
  });

  ngOnInit(): void {
    if (this.shipmentId()) {
      this.shipmentsFacade.loadAuditLogs(this.shipmentId());
    }
  }
}
