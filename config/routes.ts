export default [
  // 基于 src/page 路径
  {
    path: '/login',
    exact: true,
    component: '@/pages/login/index',
  },
  {
    path: '/404',
    component: '@/pages/404',
  },
  {
    path: '/',
    component: '@/layouts/index',
    meta: { title: '商城首页' },
    routes: [
      // 产品中心
      { path: '/demo', component: './demo/index' },
      { exact: true, path: '/', redirect: '/demo' },
    ],
  },
]
