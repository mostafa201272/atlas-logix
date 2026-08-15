import { EPermission } from '@core/permissions/models/enums/permissions.enum';

/**
 * DASHBOARD ROUTES COMMONs
 */
const BASE_TRANSLATION_KEY = 'dashboard';

/**
 * DASHBOARD ROUTES CONFIGURATION
 */
export const DASHBOARD_ROUTES = (baseRoute: string): any => ({
  name: 'dashboard',
  route: baseRoute,
  label: `${BASE_TRANSLATION_KEY}.title`,
  itemsBaseTranslationKey: `${BASE_TRANSLATION_KEY}.`,
  redirectTo: `${baseRoute}/overview`,

  overview: {
    name: 'overview',
    route: `${baseRoute}/overview`,
    label: `${BASE_TRANSLATION_KEY}.menu.overview.title`,
    itemsBaseTranslationKey: `${BASE_TRANSLATION_KEY}.overview.`,
    icon: `pi pi-th-large`,
  },

  shipments: {
    name: 'shipments',
    route: `${baseRoute}/shipments`,
    label: `${BASE_TRANSLATION_KEY}.menu.shipments.title`,
    itemsBaseTranslationKey: `${BASE_TRANSLATION_KEY}.shipments.`,
    icon: `pi pi-truck`,
  },

  liveSensors: {
    name: 'live-sensors',
    route: `${baseRoute}/live-sensors`,
    label: `${BASE_TRANSLATION_KEY}.menu.liveSensors.title`,
    itemsBaseTranslationKey: `${BASE_TRANSLATION_KEY}.liveSensors.`,
    icon: `pi pi-microchip`,
    permission: EPermission.LIVE_STREAM,
  },

  administration: {
    name: 'administration',
    route: `${baseRoute}/administration`,
    label: `${BASE_TRANSLATION_KEY}.menu.administration.title`,
    itemsBaseTranslationKey: `${BASE_TRANSLATION_KEY}.administration.`,
    icon: `pi pi-cog`,
    permission: EPermission.TENANT_USER_ADMIN,
  },
});
