/**
 * HOME ROUTES COMMONs
 */
const BASE_ASSETS_ROUTE = '/assets/media/modules/home/';
const BASE_TRANSLATION_KEY = 'home';

/**
 * HOME ROUTES CONFIGURATION
 */
export const HOME_ROUTES = (baseRoute: string): any => ({
  name: 'home',
  route: baseRoute,
  label: `${BASE_TRANSLATION_KEY}.title`,
  itemsBaseTranslationKey: `${BASE_TRANSLATION_KEY}.`,
});
