import React, { useState, useEffect, memo, useCallback } from 'react'
import { throttle } from 'lodash'
import toTop from '@/assets/gotop.png'
import style from './style/index.less'
interface PropTypes {
  // 滑动多少出现回到顶部按钮
  scrollY?: number
}
function GoTop(props: PropTypes) {
  const { scrollY = 200 } = props
  const [show, setShow] = useState<boolean>(false)

  const handleScroll = useCallback(() => {
    setShow(window.scrollY > scrollY)
  }, [])
  const handleClickToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 200), false)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {show && <img onClick={handleClickToTop} className={style['toTop']} src={toTop} />}
    </>
  )
}
export default memo(GoTop)