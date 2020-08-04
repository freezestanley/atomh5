import React, { memo } from 'react'
import { withRouter, history, useSelector, useDispatch } from 'umi'
import { LoadingOutlined } from '@ant-design/icons'
import PageLoading from '@/components/pageLoading'
import Breadcrumb from '@/components/Breadcrumb'
import { Spin } from 'antd'
import Header from './head'
import Left from './left/index'
import { MenuItemType } from '../MenuContext'
import styles from './index.less'
import { GlobalStateType } from '@/models/global'
interface PropTypes {
  dispatch: any
  location: any
  menus: MenuItemType[]
  children: ChildNode
  route: any
}
interface StateTypes {
  global: GlobalStateType
}
const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />
function Layout(props: PropTypes) {
  debugger
  const { route } = props
  const { openMenus, currPathname, menus } = useSelector(
    (state: StateTypes) => state.global
  )
  const dispatch = useDispatch()
  if (props.location.pathname === '/login') {
    return (
      <div className={styles.userContent}>
        <div className={styles.content}>
          <div className={styles.main}>{props.children}</div>
        </div>
      </div>
    )
  }
  function onRouterChange(path: string) {
    history.push(path)
  }
  function onOpenChange(openMenus: string[]) {
    dispatch({
      type: 'global/setOpenMenus',
      payload: {
        openMenus,
      },
    })
  }
  return (
    <React.Fragment>
      <div className={styles.header}>
        <Header />
        <div className={styles.content}>
          <Breadcrumb param={route} split={'>'} />
          <div>asdfasdf</div>
          <div>asdfasdf</div>
        </div>
      </div>
      <PageLoading />
      <div
        className="loadMask ant-modal-wrap"
        style={{ display: 'none' }}
        id="loadMask"
      >
        <Spin indicator={antIcon} />
      </div>
    </React.Fragment>
  )
}
// @ts-ignore
export default memo(withRouter(Layout))
