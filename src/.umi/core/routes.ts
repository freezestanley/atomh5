// @ts-nocheck
import { ApplyPluginsType, dynamic } from '/Users/zhangzhichao/work/df-work/dffl-fuman-product/dffl-fuman-product-manage/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__index' */'@/layouts/index')}),
    "routes": [
      {
        "path": "/demo",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__demo__index' */'/Users/zhangzhichao/work/df-work/dffl-fuman-product/dffl-fuman-product-manage/src/pages/demo/index')}),
        "exact": true
      },
      {
        "path": "/demo2Page",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__demo__demo2Page' */'/Users/zhangzhichao/work/df-work/dffl-fuman-product/dffl-fuman-product-manage/src/pages/demo/demo2Page')}),
        "exact": true
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
