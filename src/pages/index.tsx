// import HeaderNav from "@/components/headerNav"
import React, { FC, useEffect } from 'react'
import { history } from 'umi'
import Routes from '../../config/routes'
import useGlobalDict from '@/hooks/useGlobalDict'
import PageLoading from '@/components/pageLoading'
// currPathname
import './index.less'
// const childrenRouter = Routes.filter((router) => router.path === "/employee")
const Home: FC = function (props) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <PageLoading />
      {props.children}
    </div>
  )
}
export default Home
