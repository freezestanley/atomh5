/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './index.less'
import Carousel from 'react-slick'
import CustomerArrow from './components/customerArrow'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
interface PropTypes {
  urls: string[] // 图片url
  carouselProps?: any // react-slick属性
}
const AtSlider: FC<PropTypes> = function ({ urls, carouselProps = {} }) {
  function renderList() {
    if (!Array.isArray(urls)) return
    return urls.map((url, idx) => {
      return (
        <div>
          <div className={styles['item']} key={idx}>
            <img src={url} />
            <section>Excellence in everything we do.</section>
          </div>
        </div>
      )
    })
  }
  return (
    <div className={styles['at_slider']}>
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

export default AtSlider
