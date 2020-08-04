// https://umijs.org/config/
import { defineConfig } from 'umi'
import proxy from './proxy'
import theme from './theme'
import routes from './routes'
const path = require('path')
const { REACT_APP_ENV } = process.env
export default defineConfig({
  title: '福满保险产品管理后台',
  theme,
  mountElementId: 'app',
  // treeShaking: true,
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
  },
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
  ignoreMomentLocale: true,
  //     fastClick: true, // 移动端开启
  routes,
  define: {
    'process.env.apiUrl': 'https://www.currenturl.com/',
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@less': path.resolve(__dirname, 'src/less'),
    API: path.resolve(__dirname, 'src/api'),
    utils: path.resolve(__dirname, 'src/utils'),
  },
  // devServer: {
  // setup: function(app, server) {
  //   app.get('/some/path', function(req, res) {
  //     res.json({ custom: 'response' });
  //   });
  // }
  // },
  proxy: proxy[REACT_APP_ENV || 'dev'],
})
