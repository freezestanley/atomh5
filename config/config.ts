// https://umijs.org/config/
import { defineConfig } from 'umi'
import proxy from './proxy'
import theme from './theme'
import routes from './routes'
const { NODE_ENV } = process.env
const erudaScript =
  NODE_ENV === 'prod' ? [] : ['//cdn.jsdelivr.net/npm/eruda', 'eruda.init()']

const path = require('path')
const { UMI_ENV } = process.env
export default defineConfig({
  title: 'atom8',
  favicon: 'favicon.ico',
  theme,
  mountElementId: 'app',
  // treeShaking: true,
  // antd: {},
  dva: {
    hmr: true,
    immer: true,
  },
  forkTSChecker: {},
  // dynamicImport: {
  //   loading: '@/components/PageLoading/index',
  // },
  targets: {
    ie: 11,
    android: 9,
  },
  ignoreMomentLocale: true,
  scripts: [...erudaScript],
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
  // ! 不要用
  // cssModulesTypescriptLoader: {
  //   mode: 'emit'
  // },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'zarm',
        style: true, // or 'css'
      },
    ],
  ],
  // devServer: {
  // setup: function(app, server) {
  //   app.get('/some/path', function(req, res) {
  //     res.json({ custom: 'response' });
  //   });
  // }
  // },
  proxy: proxy[UMI_ENV || 'dev'],
  sass: {},
  extraPostCSSPlugins: [
    require('postcss-px-to-viewport')({
      viewportWidth: 320,
      // viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['NoVw'],
      minPixelValue: 1,
      mediaQuery: false,
    }),
  ],
  locale: {
    default: 'en-US',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  chainWebpack(config) {
    config.merge({
      module: {
        rules: [
          {
            test: /\.tsx$/,
            use: [
              {
                loader: path.resolve('./loaders/inline-style-px-to-vw.js'),
                options: {
                  unitToConvert: 'px', // 自定义转换单位
                  viewportWidth: 375, // 视口宽度
                  unitPrecision: 5, // 保留小数位
                  minPixelValue: 2, // 最小转换数值
                },
              },
            ],
          },
        ],
      },
    })
  },
})
