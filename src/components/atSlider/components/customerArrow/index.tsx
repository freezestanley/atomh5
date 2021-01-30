/**
 * @description 轮播图设置
 */
import React, { FC } from 'react'
import classnames from 'classnames'
import { CustomArrowProps } from 'react-slick'
import styles from './styles/index.less'
const [arrowImg] = [require('./images/arrow-right.png')]
interface PropTypes {
  arrow?: 'left' | 'right'
}
const CustomerArrow: FC<PropTypes & CustomArrowProps> = function ({
  currentSlide,
  slideCount,
  ...props
}) {
  return (
    <div {...props}>
      {/* <div className={styles['customerArrow']}> */}
      <div
        className={classnames(styles['arrow'], {
          [styles['left']]: props?.arrow === 'left',
        })}
      >
        <img src={arrowImg} alt="" />
      </div>
      {/* </div> */}
    </div>
  )
}

export default CustomerArrow
