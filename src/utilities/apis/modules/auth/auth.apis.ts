import { environment } from '@environments/environment';

/**
 * AUTH BASE URL
 */
const auth = environment.auth;

/**
 * AUTH APIs
 */
export const AUTH_APIS = {
  LOGIN: `${auth}/login`,
  USER: `${auth}/me`,
};
