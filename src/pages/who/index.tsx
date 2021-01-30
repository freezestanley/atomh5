/**
 * @description 描述
 */
import React, { FC, useRef } from 'react'
import styles from './styles/index.less'
import Valuechart from './components/valuechat'
import { Carousel, Button } from 'zarm'
import { ReactComponent as Email } from './images/ledger-new-logo-.svg'
import { ReactComponent as Aa } from './images/aa.svg'
import ken from './images/ken.png'
import jc from './images/a.jpg'
import wxc from './images/wxc.jpg'
import chengyue from './images/chengyue.png'

import logo1 from './images/investors/1_1.png'
import logo2 from './images/investors/1_2.png'
import logo3 from './images/investors/1_3.png'
import logo4 from './images/investors/2_1.png'
import logo5 from './images/investors/2_2.png'
import logo6 from './images/investors/2_3.png'
import logo7 from './images/investors/2_4.png'


const ITEMS = [ken, wxc, chengyue, jc]
const contentRender = () => {
  return ITEMS.map((item, i) => {
    return (
      <div className="carousel__item__pic" key={+i}>
        <img src={item} alt="" draggable={false} />
      </div>
    )
  })
}
interface personTypes {
  avater: string
  name: string
  introduce: string
}
const Person: FC<personTypes> = function (props) {
  return (
    <div className={styles['person']}>
      <div
        className={styles['avater']}
        style={{ backgroundImage: `url(${props?.avater})` }}
      ></div>
      <div className={styles['name']}>{props.name} <b className={ styles['linked']}></b></div>
      <div className={styles['introduce']}>{props.introduce}</div>
    </div>
  )
}

const personer = [
  {
    name: 'Ken Lo',
    introduce:
      '10+ years of experience in global corporations and early stage startups, incl. HSBC, McKinsey, ZA International',
  },
  {
    name: 'Xiaochuan Wu',
    introduce:
      '8+ years of experience in blockchain and crypto assets development with leading tech companies incl. Huobi, ZhongAn',
  },
  {
    name: 'Yue Cheng',
    introduce:
      '15+ years of experience in software engineering with leading tech companies incl. Nokia, Blackberry, Arris ',
  },
  {
    name: 'Jonathan Cheung',
    introduce:
      '10+ years of experience in product development and pricing in major financial institutions incl. Manulife, FWD, ZA International ',
  },
]


interface investorType {
  label: string;
  logo: string[];
}
const logo = [ logo1, logo2, logo6, logo7, logo5, logo3, logo4]
const Investor: FC<investorType> = function (props) {
  return (
    <dl className={styles['investor']}>
      <dt>{props.label}</dt>
      {props.logo.map((ele, idx, arr) => {
        return (<dd key={`${idx}a`}><img src={ ele } /></dd>)
      })}
    </dl>
  )
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

      <div className={ styles['WHO_manage']}>
        <div className={ styles['WHO_title']}>Senior Management </div>
        {personer.map((ele, idx, arr) => {
          return (
            <Person
              key={idx}
              name={ele.name}
              avater={ITEMS[idx]}
              introduce={ele.introduce}
            />
          )
        })}
      </div>

      <Investor logo={logo} label={ 'Our Investors' }/>

      {/* <div> */}
        {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1258px" height="960px">
          <image width="200" height="200" stroke="black" href="http://jtl3d.oss-cn-hangzhou.aliyuncs.com/contents/54c89316-bcf7-59f1-934b-9314429f5b7a/top.png">
          </image>
      </svg> */}
        {/* <Aa /> */}
      {/* </div> */}

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
