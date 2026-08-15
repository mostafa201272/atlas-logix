import { ISensorTelemetry } from './live-sensors.interface';

export interface ILiveSensorsState {
  isStreaming: boolean;
  ticket: string | null;
  latestTelemetry: ISensorTelemetry | null;
  streamHistory: ISensorTelemetry[];
  isLoading: boolean;
  error: string | null;
}
