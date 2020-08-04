import 'antd/es/spin/style'
import _Spin from 'antd/es/spin'
import React from 'react'

const PageLoading = function PageLoading(_ref) {
  // const tip = _ref.tip;
  return React.createElement(
    'div',
    {
      style: {
        // paddingTop: 100,
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        // textAlign: 'center',
        zIndex: 9999,
        background: 'rgba(37, 65, 106, 0.2)',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: 'auto',
        outline: 0,
      },
      id: 'globalSpin',
    },
    React.createElement(_Spin, {
      size: 'large',
      tip: _ref.tip,
    })
  )
}

PageLoading.hideLoading = () => {
  let globalSpin = document.getElementById('globalSpin')
  if (globalSpin) globalSpin.style.display = 'none'
}

PageLoading.showLoading = () => {
  let globalSpin = document.getElementById('globalSpin')
  if (globalSpin) globalSpin.style.display = 'flex'
}

export default PageLoading
