import { inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tap, switchMap, pipe, of, catchError, map, Observable } from 'rxjs';
import { AuthApiService } from '../services/auth-api.service';
import { StorageService } from '@core/services/storage.service';
import {
  type IAuthState,
  type ILoginRequest,
  type ILoginResponse,
  type IUserResponse,
} from '../models/interfaces';
import { MODULES_ROUTES } from '@utilities/routers';
import { AUTH_KEYS } from '../models/enums';

/**
 * DEFINE - The initial state
 */
const initialState: IAuthState = {
  data: null,
  isLoading: false,
  error: null,
};

/**
 * STORE - Auth Store
 */
export const AuthStore = signalStore(
  { providedIn: 'root' },

  /**
   * Init - Provide the initial state
   */
  withState(initialState),

  /**
   * Computed - Computed values based on store changes
   */
  withComputed((store, storageService = inject(StorageService)) => ({
    isLoggedIn: computed(
      () => !!store.data()?.token || !!storageService.getStorage(AUTH_KEYS.TOKEN),
    ),
    token: computed(() => store.data()?.token || storageService.getStorage(AUTH_KEYS.TOKEN)),
  })),

  /**
   * Methods - Store data manipulation methods
   */
  withMethods(
    (
      store,
      apis = inject(AuthApiService),
      storageService = inject(StorageService),
      router = inject(Router),
    ) => ({
      /**
       * POST - Login request
       */
      login: rxMethod<ILoginRequest>(
        pipe(
          tap(() => patchState(store, { isLoading: true, error: null })),
          switchMap((credentials) =>
            apis.login(credentials).pipe(
              tap((response: ILoginResponse) => {
                if (response?.token) {
                  storageService.setStorage(AUTH_KEYS.TOKEN, response.token);
                }
                patchState(store, { data: response, isLoading: false, error: null });
                router.navigate([MODULES_ROUTES.modules.dashboard.route]);
              }),
              catchError((error: any) => {
                const errorMessage = error?.error?.message || error?.message || 'Login failed';
                patchState(store, {
                  data: null,
                  error: errorMessage,
                  isLoading: false,
                });
                return of(null);
              }),
            ),
          ),
        ),
      ),

      /**
       * GET - Fetch user profile on authorized route access / page refresh
       */
      getUser(): Observable<boolean> {
        const token = storageService.getStorage<string>(AUTH_KEYS.TOKEN);

        if (!token) {
          storageService.removeStorageItem(AUTH_KEYS.TOKEN);
          patchState(store, initialState);
          router.navigate([MODULES_ROUTES.modules.auth.login.route]);
          return of(false);
        }

        patchState(store, { isLoading: true, error: null });

        return apis.user().pipe(
          map((userResponse: IUserResponse) => {
            const fullData: ILoginResponse = {
              ...userResponse,
              token: token,
            };
            patchState(store, { data: fullData, isLoading: false, error: null });
            return true;
          }),
          catchError((error: any) => {
            const errorMessage = error?.error?.message || error?.message || 'Session expired';
            patchState(store, { data: null, error: errorMessage, isLoading: false });
            storageService.removeStorageItem(AUTH_KEYS.TOKEN);
            router.navigate([MODULES_ROUTES.modules.auth.login.route]);
            return of(false);
          }),
        );
      },

      /**
       * RESET - Reset store to initial state & remove stored token
       */
      reset(): void {
        storageService.removeStorageItem(AUTH_KEYS.TOKEN);
        patchState(store, initialState);
        router.navigate([MODULES_ROUTES.modules.auth.login.route]);
      },
    }),
  ),
);
