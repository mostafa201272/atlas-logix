import { inject, computed } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tap, switchMap, pipe, of, catchError, map } from 'rxjs';
import { AdministrationApiService } from '../services/administration-api.service';
import { ITenant } from '@modules/auth/models/interfaces';
import {
  IAdministrationState,
  ITenantUser,
  ITenantsApiResponse,
  ITenantUsersApiResponse,
} from '../models/interfaces';

/**
 * DEFINE - Initial state
 */
const initialState: IAdministrationState = {
  tenants: [],
  selectedTenant: null,
  tenantUsers: [],
  isLoading: false,
  error: null,
};

/**
 * STORE - Administration Store
 */
export const AdministrationStore = signalStore(
  { providedIn: 'root' },

  /**
   * Init - Provide initial state
   */
  withState(initialState),

  /**
   * Computed - Computed state properties
   */
  withComputed((store) => ({
    tenantsCount: computed(() => store.tenants().length),
    selectedTenantId: computed(() => store.selectedTenant()?.tenantId || null),
  })),

  /**
   * Methods - Store data manipulation methods
   */
  withMethods((store, apis = inject(AdministrationApiService)) => {
    /**
     * GET - Load Tenant Users for selected tenant
     */
    const loadTenantUsers = rxMethod<{ tenantId: string; userId?: string }>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap(({ tenantId, userId }) =>
          apis.getTenantUsers(tenantId, userId).pipe(
            map((response: ITenantUsersApiResponse | any) => {
              if (Array.isArray(response?.data)) {
                return response.data;
              }
              if (response?.data) {
                return [response.data];
              }
              if (Array.isArray(response)) {
                return response;
              }
              return [];
            }),
            tap((tenantUsers: ITenantUser[]) => {
              patchState(store, { tenantUsers, isLoading: false });
            }),
            catchError((error: any) => {
              const errorMessage =
                error?.error?.message || error?.message || 'Failed to load tenant users';
              patchState(store, { tenantUsers: [], isLoading: false, error: errorMessage });
              return of([]);
            }),
          ),
        ),
      ),
    );

    /**
     * SET - Update Selected Tenant and trigger user fetch
     */
    const setSelectedTenant = (tenant: ITenant): void => {
      patchState(store, { selectedTenant: tenant });
      if (tenant?.tenantId) {
        loadTenantUsers({ tenantId: tenant.tenantId });
      }
    };

    /**
     * GET - Load Tenants List
     */
    const loadTenants = rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap(() =>
          apis.getTenants().pipe(
            map((response: ITenantsApiResponse | any) => response?.data || response || []),
            tap((tenants: ITenant[]) => {
              const currentSelected = store.selectedTenant();
              const activeSelected =
                tenants.find((t) => t.tenantId === currentSelected?.tenantId) ||
                tenants[0] ||
                null;
              patchState(store, { tenants, isLoading: false });
              if (activeSelected) {
                setSelectedTenant(activeSelected);
              }
            }),
            catchError((error: any) => {
              const errorMessage =
                error?.error?.message || error?.message || 'Failed to load tenants';
              patchState(store, { tenants: [], isLoading: false, error: errorMessage });
              return of([]);
            }),
          ),
        ),
      ),
    );

    /**
     * RESET - Reset store to initial state
     */
    const reset = (): void => {
      patchState(store, initialState);
    };

    return {
      loadTenants,
      setSelectedTenant,
      loadTenantUsers,
      reset,
    };
  }),
);
