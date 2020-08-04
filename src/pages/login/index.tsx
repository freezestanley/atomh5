import Login from './components/Login'
import React from 'react'

export default () => {
  /**
   * @description 页面参数如有token，则获取sso接口
   * 返回成功则自动跳转至项目
   * 否则为登录逻辑
   */
  function isSSO() {
    return true
  }
  return (
    <div>
      <Login />
    </div>
  )
}
