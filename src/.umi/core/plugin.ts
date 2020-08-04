// @ts-nocheck
import { Plugin } from '/Users/zhangzhichao/work/df-work/dffl-fuman-product/front-fuman-sales/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['modifyClientRenderOpts','patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','locale','locale','request',],
});
plugin.register({
  apply: require('/Users/zhangzhichao/work/df-work/dffl-fuman-product/front-fuman-sales/src/app.tsx'),
  path: '/Users/zhangzhichao/work/df-work/dffl-fuman-product/front-fuman-sales/src/app.tsx',
});
plugin.register({
  apply: require('/Users/zhangzhichao/work/df-work/dffl-fuman-product/front-fuman-sales/src/.umi/plugin-dva/runtime.tsx'),
  path: '/Users/zhangzhichao/work/df-work/dffl-fuman-product/front-fuman-sales/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('/Users/zhangzhichao/work/df-work/dffl-fuman-product/front-fuman-sales/src/.umi/plugin-locale/runtime.tsx'),
  path: '/Users/zhangzhichao/work/df-work/dffl-fuman-product/front-fuman-sales/src/.umi/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
