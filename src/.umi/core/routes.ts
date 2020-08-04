// @ts-nocheck
import { ApplyPluginsType, dynamic } from '/Users/zhangzhichao/work/df-work/dffl-fuman-product/front-fuman-sales/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/login",
    "exact": true,
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login__index' */'@/pages/login/index')})
  },
  {
    "path": "/404",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404')}),
    "exact": true
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__index' */'@/layouts/index')}),
    "meta": {
      "title": "商城首页"
    },
    "routes": [
      {
        "path": "/demo",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__demo__index' */'/Users/zhangzhichao/work/df-work/dffl-fuman-product/front-fuman-sales/src/pages/demo/index')}),
        "exact": true
      },
      {
        "exact": true,
        "path": "/",
        "redirect": "/demo"
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
