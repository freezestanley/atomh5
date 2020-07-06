// ref: https://umijs.org/config/
import { defineConfig } from 'umi';
import moduleName from 'umi-types';
// 开发环境转发地址
const PoxryUrl = 'http://poxrydemourl.com'

const path = require('path')
const config = defineConfig({
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
    '@api': path.resolve(__dirname, 'src/services'),
    utils: path.resolve(__dirname, 'utils'),
  },
  proxy: {
    '/v1':{
      target: PoxryUrl,
      changeOrigin: true,
      secure: false,

    },
     
    '/file':{
      target: PoxryUrl,
      changeOrigin: true,
      secure: false,

    },
   
  }
});
export default config;