import { environment } from '@environments/environment';

/**
 * HOME BASE URL
 */
const home = environment.auth;

/**
 * HOME APIs
 */
export const HOME_APIS = {
  DATA: `${home}`,
};
