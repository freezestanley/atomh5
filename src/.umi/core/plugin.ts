// @ts-nocheck
import { Plugin } from '/Users/zhangzhichao/work/df-work/umipc/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});
plugin.register({
  apply: require('/Users/zhangzhichao/work/df-work/umipc/src/app.tsx'),
  path: '/Users/zhangzhichao/work/df-work/umipc/src/app.tsx',
});
plugin.register({
  apply: require('/Users/zhangzhichao/work/df-work/umipc/src/.umi/plugin-dva/runtime.tsx'),
  path: '/Users/zhangzhichao/work/df-work/umipc/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
