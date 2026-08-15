import { inject, computed } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tap, switchMap, pipe, of, catchError, forkJoin } from 'rxjs';
import { ShipmentsApiService } from '../services/shipments-api.service';
import { AuthFacade } from '@modules/auth/facade/auth.facade';
import {
  IShipmentsState,
  IShipment,
  IShipmentsApiResponse,
  ISensorHistoryItem,
  ISensorHistoryApiResponse,
  IComplianceReportResponse,
  IAuditLogItem,
  IAuditLogsApiResponse,
} from '../models/interfaces';

/**
 * DEFINE - Initial state
 */
const initialState: IShipmentsState = {
  shipments: [],
  selectedShipment: null,
  count: 0,
  sensorHistory: [],
  complianceReport: null,
  auditLogs: [],
  isLoading: false,
  isLoadingDetails: false,
  error: null,
};

/**
 * STORE - Shipments Store
 */
export const ShipmentsStore = signalStore(
  { providedIn: 'root' },

  /**
   * Init - Provide initial state
   */
  withState(initialState),

  /**
   * Computed - Computed state properties
   */
  withComputed((store) => ({
    shipmentsCount: computed(() => store.shipments().length),
    totalCount: computed(() => store.count()),
  })),

  /**
   * Methods - Store data manipulation methods
   */
  withMethods((store, apis = inject(ShipmentsApiService), authFacade = inject(AuthFacade)) => ({
    /**
     * GET - Load Shipments List for tenantId
     */
    loadShipments: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap((tenantId) => {
          if (!tenantId) {
            patchState(store, { shipments: [], count: 0, isLoading: false });
            return of(null);
          }
          return apis.getShipments(tenantId).pipe(
            tap((response: IShipmentsApiResponse) => {
              const shipments = response?.results || [];
              const count = response?.count || shipments.length;
              patchState(store, { shipments, count, isLoading: false });
            }),
            catchError((error: any) => {
              const errorMessage =
                error?.error?.message || error?.message || 'Failed to load shipments';
              patchState(store, { shipments: [], count: 0, isLoading: false, error: errorMessage });
              return of(null);
            }),
          );
        }),
      ),
    ),

    /**
     * GET - Load Sensor History for shipmentId
     */
    loadSensorHistory: rxMethod<{ shipmentId: string; limit?: number }>(
      pipe(
        tap(() => patchState(store, { isLoadingDetails: true, error: null })),
        switchMap(({ shipmentId, limit }) =>
          apis.getSensorHistory(shipmentId, limit).pipe(
            tap((response: ISensorHistoryApiResponse) => {
              const sensorHistory = response?.data || [];
              patchState(store, { sensorHistory, isLoadingDetails: false });
            }),
            catchError((error: any) => {
              const errorMessage =
                error?.error?.message || error?.message || 'Failed to load sensor history';
              patchState(store, {
                sensorHistory: [],
                isLoadingDetails: false,
                error: errorMessage,
              });
              return of(null);
            }),
          ),
        ),
      ),
    ),

    /**
     * GET - Load Compliance Report for shipmentId
     */
    loadComplianceReport: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { isLoadingDetails: true, error: null })),
        switchMap((shipmentId) =>
          apis.getComplianceReport(shipmentId).pipe(
            tap((complianceReport: IComplianceReportResponse) => {
              patchState(store, { complianceReport, isLoadingDetails: false });
            }),
            catchError((error: any) => {
              const errorMessage =
                error?.error?.message || error?.message || 'Failed to load compliance report';
              patchState(store, {
                complianceReport: null,
                isLoadingDetails: false,
                error: errorMessage,
              });
              return of(null);
            }),
          ),
        ),
      ),
    ),

    /**
     * POST - Change Compliance Status (Approve / Reject) and re-fetch compliance report, audit logs & shipments table
     */
    changeComplianceStatus: rxMethod<{
      shipmentId: string;
      status: 'APPROVED' | 'REJECTED' | 'APPROVE' | 'REJECT';
    }>(
      pipe(
        tap(() => patchState(store, { isLoadingDetails: true, error: null })),
        switchMap(({ shipmentId, status }) => {
          const isApprove = status === 'APPROVED' || status === 'APPROVE';
          const request$ = isApprove
            ? apis.approveCompliance(shipmentId)
            : apis.rejectCompliance(shipmentId);

          return request$.pipe(
            switchMap(() => {
              const activeTenantId = authFacade.selectedTenant()?.tenantId;
              const report$ = apis.getComplianceReport(shipmentId);
              const shipments$ = activeTenantId ? apis.getShipments(activeTenantId) : of(null);
              const audit$ = apis.getAuditLogs(shipmentId);

              return forkJoin([report$, shipments$, audit$]);
            }),
            tap(([complianceReport, shipmentsResponse, auditResponse]) => {
              const patch: Partial<IShipmentsState> = {
                complianceReport,
                isLoadingDetails: false,
              };
              if (shipmentsResponse) {
                const shipments = shipmentsResponse?.results || [];
                const count = shipmentsResponse?.count || shipments.length;
                patch.shipments = shipments;
                patch.count = count;
              }
              if (auditResponse) {
                patch.auditLogs = auditResponse?.data || [];
              }
              patchState(store, patch);
            }),
            catchError((error: any) => {
              const errorMessage =
                error?.error?.message || error?.message || 'Failed to update compliance status';
              patchState(store, { isLoadingDetails: false, error: errorMessage });
              return of(null);
            }),
          );
        }),
      ),
    ),

    /**
     * GET - Load Audit Logs for shipmentId
     */
    loadAuditLogs: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { isLoadingDetails: true, error: null })),
        switchMap((shipmentId) =>
          apis.getAuditLogs(shipmentId).pipe(
            tap((response: IAuditLogsApiResponse) => {
              const auditLogs = response?.data || [];
              patchState(store, { auditLogs, isLoadingDetails: false });
            }),
            catchError((error: any) => {
              const errorMessage =
                error?.error?.message || error?.message || 'Failed to load audit logs';
              patchState(store, { auditLogs: [], isLoadingDetails: false, error: errorMessage });
              return of(null);
            }),
          ),
        ),
      ),
    ),

    /**
     * SET - Select active shipment
     */
    setSelectedShipment(shipment: IShipment | null): void {
      patchState(store, { selectedShipment: shipment });
    },

    /**
     * RESET - Reset store to initial state
     */
    reset(): void {
      patchState(store, initialState);
    },
  })),
);
