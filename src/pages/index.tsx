// import HeaderNav from "@/components/headerNav"
import React, { FC, useEffect } from 'react'
import { history } from 'umi'
import Routes from '../../config/routes'
import useGlobalDict from '@/hooks/useGlobalDict'
import PageLoading from '@/components/pageLoading'
import Header from '@/components/header'
import Footer from '@/components/footer'
// currPathname
import styles from './index.less'
// const childrenRouter = Routes.filter((router) => router.path === "/employee")
const Home: FC = function (props) {
  return (
    <div className={styles['container']}>
      <PageLoading />
      <Header />
      <div className={ styles['contain_box']}>
        <div>{props.children}</div>
        <Footer />
      </div>
    </div>
  )
}
export default Home
