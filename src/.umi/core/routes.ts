// @ts-nocheck
import { ApplyPluginsType, dynamic } from '/Users/zhangzhichao/work/df-work/dffl-fuman-product/scaffold-m/node_modules/@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/demo",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__demo__index' */'/Users/zhangzhichao/work/df-work/dffl-fuman-product/scaffold-m/src/pages/demo/index')}),
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
