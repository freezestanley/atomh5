// @ts-nocheck
import './core/polyfill';
import '@@/core/devScripts';
import '../global.ts';
import { plugin } from './core/plugin';
import { createHistory } from './core/history';
import { ApplyPluginsType } from '/Users/zhangzhichao/work/df-work/umipc/node_modules/@umijs/runtime';
import { renderClient } from '/Users/zhangzhichao/work/df-work/umipc/node_modules/@umijs/renderer-react/dist/index.js';


require('../global.less');

const getClientRender = (args: { hot?: boolean } = {}) => plugin.applyPlugins({
  key: 'render',
  type: ApplyPluginsType.compose,
  initialValue: () => {
    return renderClient({
      // @ts-ignore
      routes: require('./core/routes').routes,
      plugin,
      history: createHistory(args.hot),
      isServer: process.env.__IS_SERVER,
      dynamicImport: true,
      rootElement: 'app',
      defaultTitle: ``,
    });
  },
  args,
});

const clientRender = getClientRender();
export default clientRender();


    window.g_umi = {
      version: '3.2.7',
    };
  

// hot module replacement
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./core/routes', () => {
    getClientRender({ hot: true })();
  });
}
