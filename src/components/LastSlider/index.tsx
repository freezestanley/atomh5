/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './index.less'
import Carousel from 'react-slick'
import CustomerArrow from './components/customerArrow'
import { LastThinkRes } from '@/api/modules/cms/interface'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
interface PropTypes {
  items: LastThinkRes[] // 图片url
  carouselProps?: any // react-slick属性
}
const LastSlider: FC<PropTypes> = function ({ items, carouselProps = {} }) {
  function renderList() {
    if (!Array.isArray(items)) return
    return items.map((item, idx) => {
      return (
        <div key={`${idx}bcd`}>
          <div className={styles['item']} key={idx}>
            <img src={item.pic_url} />
            <h1>
              By {item.author} | {item.timestamp}
            </h1>
            <div className={styles['descript']}>{item.title}</div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className={styles['last_slider']}>
      <Carousel
        // autoplay
        autoplaySpeed={3000}
        dots={false}
        arrows
        prevArrow={<CustomerArrow arrow="left" />}
        nextArrow={<CustomerArrow />}
        {...carouselProps}
      >
        {renderList()}
      </Carousel>
    </div>
  )
}

export default LastSlider
