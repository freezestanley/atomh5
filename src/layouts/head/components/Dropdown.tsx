import React from 'react'
import { Layout, Menu, Dropdown } from 'antd'
import { DropMenuItemType } from '@/MenuContext'
import { GlobalStateType } from '@/models/global'
import { CaretDownOutlined } from '@ant-design/icons'

const { Header } = Layout
interface PropTypes {
  title: string
  onHeaderClick: (e: string) => void
  dropMenus: GlobalStateType['dropMenu1']
  currentHeaderIdx: GlobalStateType['currentHeaderIdx']
}
export default (props: PropTypes) => {
  // @ts-ignore
  const { dropMenus, currentHeaderIdx, title } = props

  function renderHeader() {
    debugger
    return (
      <Menu>
        {dropMenus &&
          dropMenus.map((item: DropMenuItemType, idx: number) => {
            return (
              <Menu.Item key={idx} onClick={menuItemClick}>
                {item.title}
              </Menu.Item>
            )
          })}
      </Menu>
    )
  }
  function menuItemClick(e: any) {
    props.onHeaderClick(e.key)
  }
  return (
    <Dropdown overlay={renderHeader()}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {title}
        <CaretDownOutlined />
      </a>
    </Dropdown>
  )
}
