import { IConfig } from 'umi'
const routers: IConfig['routes'] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: './home/index',
    // wrappers: ["./wrappers/auth"],
  },
  {
    path: '/sto',
    component: './sto/index',
    // wrappers: ["./wrappers/auth"],
  },
  {
    path: '/howitwork',
    component: './how/index',
    // wrappers: ["./wrappers/auth"],
  },
  {
    path: '/whoweare',
    component: './who/index',
    // wrappers: ["./wrappers/auth"],
  },
  { exact: true, path: '*', redirect: '/home' },
]

export default routers
