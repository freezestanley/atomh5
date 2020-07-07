// https://umijs.org/config/
import { defineConfig } from 'umi';
import proxy from './proxy';
const path = require('path');
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  theme: {
    "primary-color": "#00bc70"
  },
  mountElementId:'app',
  // treeShaking: true,
  antd: {},
  dva: {
    hmr: true,
    immer: true,
  },
  forkTSChecker: {},
  dynamicImport: {
    // loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  //     fastClick: true, // 移动端开启
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/demo', component: './demo/index' },
        { path: '/demo2Page', component: './demo/demo2Page' },
      ],
    },
  ],
  define: {
    "process.env.apiUrl":'https://www.currenturl.com/'
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@less': path.resolve(__dirname, 'src/less'),
    'API': path.resolve(__dirname, 'src/api'),
    utils: path.resolve(__dirname, 'src/utils'),
  },
  proxy: proxy[REACT_APP_ENV || 'dev']
});
