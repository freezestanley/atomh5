/**
 * @description 描述
 */
import AtSlider from '@/components/atSlider'
import Lastthink from '@/components/LastSlider'
import React, { FC, useRef, useState, useEffect } from 'react'
import { useIntl } from 'umi'
import Valuechart from './components/valuechat'
import jc from './images/a.jpg'
import chengyue from './images/chengyue.png'
import logo1 from './images/investors/1_1.png'
import logo2 from './images/investors/1_2.png'
import logo3 from './images/investors/1_3.png'
import logo4 from './images/investors/2_1.png'
import logo5 from './images/investors/2_2.png'
import logo6 from './images/investors/2_3.png'
import logo7 from './images/investors/2_4.png'
import { CMS } from '@/api'
import ken from './images/ken.png'
import wxc from './images/wxc.jpg'
import styles from './styles/index.less'
import { formatBold } from '@/utils/i18nTools'
import { LastThinkRes, NewsRes } from '@/api/modules/cms/interface'

const ITEMS = [
  ken,
  // wxc,
  chengyue,
  jc,
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
interface personTypes {
  avater: string
  name: string
  introduce: string
  link?: string
}
const Person: FC<personTypes> = function (props) {
  return (
    <div className={styles['person']}>
      <div
        className={styles['avater']}
        style={{ backgroundImage: `url(${props?.avater})` }}
      ></div>
      <div className={styles['name']}>
        {props.name}
        <a href={props.link} target="_blank" className={styles['linked']}></a>
      </div>
      <div className={styles['introduce']}>{props.introduce}</div>
    </div>
  )
}

interface investorType {
  label: string
  logo: string[]
}
const logo = [logo1, logo2, logo6, logo7, logo5, logo3, logo4]
const Investor: FC<investorType> = function (props) {
  return (
    <dl className={styles['investor']}>
      <dt>{props.label}</dt>
      {props.logo.map((ele, idx, arr) => {
        return (
          <dd key={`${idx}a`}>
            <img src={ele} />
          </dd>
        )
      })}
    </dl>
  )
}

interface PropTypes {}
const WHO: FC<PropTypes> = function (props) {
  const carouselRef = useRef()
  const i18n = useIntl(),
    [lastThinkData, setLastThinkData] = useState<LastThinkRes[]>([]),
    [newsData, setLastNewsData] = useState<LastThinkRes[]>([])
  const personer = [
    {
      name: i18n.formatMessage({ id: 'who_manage_KenLo' }),
      link: 'https://www.linkedin.com/in/ken-lo-52979098/',
      introduce: i18n.formatMessage({ id: 'who_manage_KenLo_desc' }),
    },
    // {
    //   name: i18n.formatMessage({ id: 'who_manage_xiaochuan' }),
    //   link: 'https://www.linkedin.com/in/xiaochuan-wu-26069185',
    //   introduce: i18n.formatMessage({ id: 'who_manage_xiaochuan_desc' }),
    // },
    {
      name: i18n.formatMessage({ id: 'who_manage_yueCheng' }),
      link: 'https://www.linkedin.com/in/dan-cheng-73472a3',
      introduce: i18n.formatMessage({ id: 'who_manage_yueCheng_desc' }),
    },
    {
      name: i18n.formatMessage({ id: 'who_manage_Jonathan' }),
      link: 'https://www.linkedin.com/in/jonathan-cheung-b229b017/Jonathan',
      introduce: i18n.formatMessage({ id: 'who_manage_Jonathan_desc' }),
    },
  ]
  const coreValuesItem = [
    {
      url: require('./images/core-value/Core_Values_1.png'),
      text: i18n.formatMessage({ id: 'who_core_txt_1' }),
    },
    {
      url: require('./images/core-value/Core_Values_2.png'),
      text: i18n.formatMessage({ id: 'who_core_txt_2' }),
    },
    {
      url: require('./images/core-value/Core_Values_3.png'),
      text: i18n.formatMessage({ id: 'who_core_txt_3' }),
    },
    {
      url: require('./images/core-value/Core_Values_4.png'),
      text: i18n.formatMessage({ id: 'who_core_txt_4' }),
    },
    {
      url: require('./images/core-value/Core_Values_5.png'),
      text: i18n.formatMessage({ id: 'who_core_txt_5' }),
    },
  ]
  useEffect(() => {
    fetchLastThinkData()
    fetchLastThinkData('news')
  }, [])
  async function fetchLastThinkData(news?: string) {
    try {
      const res: ResType<LastThinkRes[]> = await CMS.CmsNews({
        offset: 0,
        limit: 10,
        query: news,
      })
      if (res.code === 0) {
        news ? setLastNewsData(res.data) : setLastThinkData(res.data)
      }
    } catch (error) {}
  }
  return (
    <div className={styles['WHO']}>
      <div className={styles['WHO_banner']}>
        {i18n.formatMessage({ id: 'sto_whoweare' })}
      </div>
      <div className={styles['WHO_article']}>
        <p>{formatBold(i18n.formatMessage({ id: 'who_desc' }))}</p>
        <p>{formatBold(i18n.formatMessage({ id: 'who_desc_2' }))}</p>
      </div>

      <div className={styles['WHO_box']}>
        <Valuechart />
      </div>
      <div className={styles['core_values']}>
        <h3>{i18n.formatMessage({ id: 'sto_core' })}</h3>

        <AtSlider items={coreValuesItem} />
      </div>
      <div className={styles['WHO_manage']}>
        <div className={styles['WHO_title']}>
          {i18n.formatMessage({ id: 'sto_senior' })}
        </div>
        {personer.map((ele, idx, arr) => {
          return (
            <Person
              key={idx}
              name={ele.name}
              avater={ITEMS[idx]}
              introduce={ele.introduce}
              link={ele.link}
            />
          )
        })}
      </div>

      <div className={styles['lastthinkbox']}>
        <h1>{i18n.formatMessage({ id: 'sto_lasthink' })}</h1>
        <Lastthink items={lastThinkData} />
      </div>

      <Investor
        logo={logo}
        label={`${i18n.formatMessage({ id: 'sto_our' })}`}
      />
      <div className={styles['lastthinkbox']}>
        <h1>{i18n.formatMessage({ id: 'sto_news' })}</h1>
        <Lastthink items={newsData} />
      </div>
    </div>
  )
}

export default WHO
