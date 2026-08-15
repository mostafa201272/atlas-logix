import { Component, computed, inject, input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TranslatePipe } from '@ngx-translate/core';
import { AppBase } from '@core/bases/app-base.base';
import { ShipmentsFacade } from '../../../facade/shipments.facade';
import { IAuditLogItem } from '../../../models/interfaces';

@Component({
  selector: 'atlas-shipment-audit-log',
  imports: [DatePipe, TableModule, TranslatePipe],
  templateUrl: './atlas-shipment-audit-log.component.html',
  styleUrl: './atlas-shipment-audit-log.component.scss',
})
export class AtlasShipmentAuditLogComponent extends AppBase implements OnInit {
  private readonly shipmentsFacade = inject(ShipmentsFacade);

  /**
   * Required - Shipment ID
   */
  shipmentId = input.required<string>();

  /**
   * Base translation point for audit log tab
   */
  readonly baseTranslationPoint =
    this.MODULES_ROUTES.modules.dashboard.shipments.itemsBaseTranslationKey +
    'details.auditLog.';

  cols = [
    { field: 'field', header: 'field' },
    { field: 'before', header: 'before' },
    { field: 'after', header: 'after' },
    { field: 'changed_by', header: 'changedBy' },
    { field: 'timestamp', header: 'timestamp' },
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
