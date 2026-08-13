/**
 * AUTH ROUTES COMMONs
 */
const BASE_ASSETS_ROUTE = '/assets/media/modules/auth/';
const BASE_TRANSLATION_KEY = 'auth';

/**
 * AUTH ROUTES CONFIGURATION
 */
export const AUTH_ROUTES = (baseRoute: string): any => ({
  name: 'auth',
  route: baseRoute,
  label: `${BASE_TRANSLATION_KEY}.title`,
  itemsBaseTranslationKey: `${BASE_TRANSLATION_KEY}.`,
  redirectTo: `${baseRoute}/login`,

  login: {
    name: 'login',
    route: `${baseRoute}/login`,
    label: `${BASE_TRANSLATION_KEY}.menu.login.title`,
    itemsBaseTranslationKey: `${BASE_TRANSLATION_KEY}.login.`,
    icon: `${BASE_ASSETS_ROUTE}/login.svg`,
  },
});
