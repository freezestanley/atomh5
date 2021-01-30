/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './styles/index.less'
import { useIntl } from 'umi'

// const charts = [chart1, chart2, chart3, chart4, chart5, chart6];
const imgs = [require('./images/atom8_logo_s.png')]
const charts = [
  require('./images/icon-chart-1.png'),
  require('./images/icon-chart-2.png'),
  require('./images/icon-chart-3.png'),
  require('./images/icon-chart-4.png'),
  require('./images/icon-chart-5.png'),
  require('./images/icon-chart-6.png'),
]
const logos = [
  require('./images/logo-king.png'),
  require('./images/logo-deloitte.svg'),
  require('./images/logo-aws.svg'),
  require('./images/logo-hkbitex.png'),
]
interface PropTypes {}
const Advisory: FC<PropTypes> = function (props) {
  const i18n = useIntl()
  return (
    <div className={styles['advisory']}>
      <h2>{i18n.formatMessage({ id: 'home_advisory_head' })}</h2>
      <div>
        <h3>{i18n.formatMessage({ id: 'home_advisory_text_1' })}</h3>
        <h3>{i18n.formatMessage({ id: 'home_advisory_text_2' })}</h3>
        <h3>{i18n.formatMessage({ id: 'home_advisory_text_3' })}</h3>
        <h3>{i18n.formatMessage({ id: 'home_advisory_text_4' })}</h3>
        <h3>{i18n.formatMessage({ id: 'home_advisory_text_5' })}</h3>
        <h3>{i18n.formatMessage({ id: 'home_advisory_text_6' })}</h3>
        <h4>{i18n.formatMessage({ id: 'home_advisory_text_7' })}</h4>
        <h4>{i18n.formatMessage({ id: 'home_advisory_text_8' })}</h4>
        <img src={charts[0]} />
        <img src={charts[1]} />
        <img src={charts[2]} />
        <img src={charts[3]} />
        <img src={charts[4]} />
        <img src={charts[5]} />
        <img src={imgs[0]} />
        <img src={logos[0]} />
        <img src={logos[1]} />
        <img src={logos[2]} />
        <img src={logos[3]} />
      </div>
    </div>
  )
}

export default Advisory