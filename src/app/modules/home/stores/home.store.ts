import { inject, computed } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  tap,
  switchMap,
  pipe,
  of,
  catchError,
  map,
  debounceTime,
  filter,
  distinctUntilChanged,
} from 'rxjs';
import { HomeApisService } from '../services/home-apis.service';
import { type IHomeState } from '../models/interfaces';

/**
 * DEFINE - The initial state
 */
const initialState: IHomeState = {
  data: [],
  isLoading: false,
  error: null,
};

/**
 * STORE - Hotels Store
 */
export const HomeStore = signalStore(
  { providedIn: 'root' },

  /**
   * Init - Provide the initial state
   */
  withState(initialState),

  /**
   * Computed - Computed values based on the store changes
   */
  withComputed((store) => ({})),

  /**
   * Methods  - Store data manipulation methods
   */
  withMethods((store, apis = inject(HomeApisService)) => ({
    /**
     * GET - Load One way flights list
     */
    getData: rxMethod<any>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap((searchParams) =>
          apis.getData(searchParams).pipe(
            map((response: any) => {
              return response;
            }),
            tap((data: any) => {
              patchState(store, { data, isLoading: false });
            }),
            catchError((error: Error) => {
              patchState(store, {
                data: [],
                error: error.message,
                isLoading: false,
              });
              return of([]);
            }),
          ),
        ),
      ),
    ),

    /**
     * GET - Search about data
     */
    searchData: rxMethod<string>(
      pipe(
        /**
         * Debounce to avoid too many API calls while typing
         */
        debounceTime(500),

        /**
         * Only search if term has at least 2 characters
         */
        filter((searchTerm) => searchTerm.trim().length >= 3),

        /**
         * Don't make duplicate requests for the same search term
         */
        distinctUntilChanged(),

        /**
         * Patch - Enable the loading states
         */
        tap(() => patchState(store, { isLoading: true, error: null })),

        /**
         * Start the request
         */
        switchMap((searchTerm) =>
          apis.searchData(searchTerm).pipe(
            map((response: any) => {
              return response;
            }),
            tap((data: any[]) => {
              patchState(store, { data, isLoading: false });
            }),
            catchError((error: Error) => {
              patchState(store, {
                data: [],
                error: error.message,
                isLoading: false,
              });
              return of([]);
            }),
          ),
        ),
      ),
    ),

    /**
     * RESET - Reset the store to initial state
     */
    reset(): void {
      patchState(store, initialState);
    },
  })),
);
