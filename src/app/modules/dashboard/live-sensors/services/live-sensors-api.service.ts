import { Injectable, inject, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@core/services/http.service';
import { STREAM_APIS } from '@utilities/apis/modules/stream/stream.apis';
import { ISensorTelemetry, IStreamTicketResponse } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LiveSensorsApiService {
  private readonly httpService = inject(HttpService);
  private readonly zone = inject(NgZone);

  /**
   * POST - Generate Stream Ticket (/api/v1/stream/tickets)
   * @param tenantId Tenant ID
   */
  generateTicket(tenantId: string): Observable<IStreamTicketResponse> {
    return this.httpService.postData<IStreamTicketResponse>(STREAM_APIS.STREAM_TICKETS(), {
      tenantId,
    });
  }

  /**
   * SSE - Connect to Sensor Data Stream via ReadableStream
   * @param ticket Stream Ticket string
   * @param interval Streaming interval in seconds
   */
  connectSensorStream(ticket: string, interval: number = 3): Observable<ISensorTelemetry> {
    return new Observable<ISensorTelemetry>((subscriber) => {
      const url = STREAM_APIS.SENSOR_STREAM(ticket, interval);
      const controller = new AbortController();

      fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'text/event-stream',
        },
        signal: controller.signal,
      })
        .then((response) => {
          if (!response.ok || !response.body) {
            throw new Error(`SSE stream failed with status: ${response.status}`);
          }
          const reader = response.body.getReader();
          const decoder = new TextDecoder('utf-8');
          let buffer = '';

          const readChunk = (): void => {
            reader
              .read()
              .then(({ done, value }) => {
                if (done) {
                  this.zone.run(() => subscriber.complete());
                  return;
                }
                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop() || '';

                for (const line of lines) {
                  const trimmed = line.trim();
                  if (trimmed.startsWith('data:')) {
                    const jsonStr = trimmed.substring(5).trim();
                    if (jsonStr) {
                      try {
                        const parsedData: ISensorTelemetry = JSON.parse(jsonStr);
                        this.zone.run(() => subscriber.next(parsedData));
                      } catch (e) {
                        console.error('Error parsing SSE line:', jsonStr, e);
                      }
                    }
                  }
                }
                readChunk();
              })
              .catch((err) => {
                if (err.name !== 'AbortError') {
                  this.zone.run(() => subscriber.error(err));
                }
              });
          };

          readChunk();
        })
        .catch((err) => {
          if (err.name !== 'AbortError') {
            this.zone.run(() => subscriber.error(err));
          }
        });

      return () => {
        controller.abort();
      };
    });
  }
}
