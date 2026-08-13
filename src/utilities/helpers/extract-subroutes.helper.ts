import { MenuItem } from 'primeng/api';

export const extractSubRoutesFn = (module: any): MenuItem[] => {
  let items: MenuItem[] = [];
  for (let key in module) {
    if (
      key !== 'name' &&
      key !== 'icon' &&
      key !== 'route' &&
      key !== 'itemsBaseTranslationKey' &&
      key !== 'featureKey' &&
      key !== 'features' &&
      key !== 'redirectTo' &&
      key !== 'label'
    ) {
      items.push({
        title: module[key].label,
        icon: module[key].icon,
        routerLink: module[key].route,
        items: extractSubRoutesFn(module[key]),
      });
    }
  }
  return items;
};
