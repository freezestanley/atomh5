import { GlobalStateType } from '@/models/global'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'umi'
import style from './head.less'
import logo from '@/assets/logo.png'
import Avater from './components/Avater'
import Dropdown from './components/Dropdown'

interface PropsType {}
interface StateTypes {
  global: GlobalStateType
}
function Header(props: PropsType) {
  const { headerMenus, currentHeaderIdx, dropMenu1 } = useSelector(
    (state: StateTypes) => state.global
  )
  const dispatch = useDispatch()

  function onHeaderClick(key: string) {
    dispatch({
      type: 'global/onHeaderClick',
      payload: {
        currentHeaderIdx: key,
      },
    })
  }

  return (
    <div className={style.head}>
      <div className={style.Wrap}>
        <img className={style.logo} src={logo} />
        <div className={style.right}>
          <div>
            <Avater />
            <Dropdown
              title={'个人中心'}
              dropMenus={dropMenu1}
              currentHeaderIdx={currentHeaderIdx}
              onHeaderClick={onHeaderClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(Header)
