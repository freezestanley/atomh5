/**
 * @description 描述
 */
import React, { FC, useRef } from 'react'
import styles from './styles/index.less'
import Valuechart from './components/valuechat'
import { Carousel, Button } from 'zarm'
import { ReactComponent as Email } from './images/ledger-new-logo-.svg'
import { ReactComponent as Aa } from './images/aa.svg'

const ITEMS = [
  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',
  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',
  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',
]
const contentRender = () => {
  return ITEMS.map((item, i) => {
    return (
      <div className="carousel__item__pic" key={+i}>
        <img src={item} alt="" draggable={false} />
      </div>
    )
  })
}
interface PropTypes {}
const WHO: FC<PropTypes> = function (props) {
  const carouselRef = useRef()

  return (
    <div className={styles['WHO']}>
      <div className={styles['WHO_banner']}>Who we are</div>
      <div className={styles['WHO_article']}>
        <p>
          Atom 8 Limited provides end-to-end Security Token Offering (STO)
          solutions to empower issuers to raise capital in a more efficient
          manner. It operates as a blockchain-based workflow orchestration
          platform servicing business clients, including sponsors (Hong Kong SFC
          RA6), issuers and digital custodians.
        </p>
        <p>
          Atom 8 Limited is an affiliate company to Hong Kong Digital Asset Ex
          Ltd. (HKbitEX), which operates the website www.hkbitex.com.hk offering
          custody and transaction of digital assets (cryptocurrencies and
          security tokens). HKbitEX is an applicant to SFC Type 1 & 7 licenses.{' '}
        </p>
      </div>

      <div className={styles['WHO_box']}>
        <Valuechart />
      </div>

      <div>
        {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1258px" height="960px">
          <image width="200" height="200" stroke="black" href="http://jtl3d.oss-cn-hangzhou.aliyuncs.com/contents/54c89316-bcf7-59f1-934b-9314429f5b7a/top.png">
          </image>
      </svg> */}
        {/* <Aa /> */}
      </div>

      {/* <Carousel
        ref={carouselRef}
        loop
        direction="left"
        onChange={(index) => {
          console.log(`onChange: ${index}`);
        }}
      >
        {contentRender()}
    </Carousel> */}
    </div>
  )
}

export default WHO
