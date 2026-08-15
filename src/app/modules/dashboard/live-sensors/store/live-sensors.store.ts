import { inject, computed } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { Subscription } from 'rxjs';
import { LiveSensorsApiService } from '../services/live-sensors-api.service';
import { ILiveSensorsState, ISensorTelemetry, IStreamTicketResponse } from '../models/interfaces';

/**
 * DEFINE - Initial state
 */
const initialState: ILiveSensorsState = {
  isStreaming: false,
  ticket: null,
  latestTelemetry: null,
  streamHistory: [],
  isLoading: false,
  error: null,
};

/**
 * STORE - Live Sensors Store
 */
export const LiveSensorsStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed((store) => ({
    historyCount: computed(() => store.streamHistory().length),
    hasTelemetry: computed(() => !!store.latestTelemetry()),
  })),

  withMethods((store, apis = inject(LiveSensorsApiService)) => {
    let streamSub: Subscription | null = null;

    const stopStream = (): void => {
      if (streamSub) {
        streamSub.unsubscribe();
        streamSub = null;
      }
      patchState(store, { isStreaming: false });
    };

    const startStream = (tenantId: string): void => {
      stopStream();
      patchState(store, { isLoading: true, error: null });

      apis.generateTicket(tenantId).subscribe({
        next: (res: IStreamTicketResponse | any) => {
          const ticket =
            res?.ticket ||
            res?.ticketId ||
            res?.ticket_id ||
            res?.data?.ticket ||
            res?.data?.ticketId ||
            res?.data?.ticket_id ||
            (typeof res === 'string' ? res : null);

          if (!ticket) {
            patchState(store, {
              isLoading: false,
              isStreaming: false,
              error: 'Invalid stream ticket received',
            });
            return;
          }

          patchState(store, { ticket, isStreaming: true, isLoading: false });

          streamSub = apis.connectSensorStream(ticket).subscribe({
            next: (data: ISensorTelemetry) => {
              patchState(store, (state: any) => ({
                latestTelemetry: data,
                streamHistory: [data, ...state.streamHistory].slice(0, 100),
                isStreaming: true,
              }));
            },
            error: (err: any) => {
              patchState(store, {
                isStreaming: false,
                error: 'Sensor stream connection ended or lost',
              });
            },
          });
        },
        error: (err: any) => {
          const errorMessage =
            err?.error?.message || err?.message || 'Failed to generate stream ticket';
          patchState(store, {
            isLoading: false,
            isStreaming: false,
            error: errorMessage,
          });
        },
      });
    };

    const reset = (): void => {
      stopStream();
      patchState(store, initialState);
    };

    return {
      startStream,
      stopStream,
      reset,
    };
  }),
);
