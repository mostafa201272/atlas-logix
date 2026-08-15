import { environment } from '@environments/environment';

/**
 * STREAM BASE URL
 */
const stream = environment.stream;

/**
 * STREAM APIs
 */
export const STREAM_APIS = {
  STREAM_TICKETS: () => `${stream}/tickets`,
  SENSOR_STREAM: (streamTicket: string, interval: number = 3) =>
    `${stream}/sensor-data?ticket=${streamTicket}&interval=${interval}`,
};
