/**
 * @description 描述
 */
import React, { FC, useEffect, useMemo } from 'react'
import styles from './styles/index.less'
import { useIntl, getLocale } from 'umi'

// const charts = [chart1, chart2, chart3, chart4, chart5, chart6];
const banner = {
  'zh-CN': require('./images/home_banner_zh.png'),
  'en-US': require('./images/home_banner_en.png'),
}

const logos = [
  require('./images/logo-king.png'),
  require('./images/logo-deloitte.svg'),
  require('./images/logo-aws.svg'),
  require('./images/logo-hkbitex.png'),
]
interface PropTypes {}
const Advisory: FC<PropTypes> = function (props) {
  const local = getLocale()
  const i18n = useIntl()
  return (
    <div className={styles['advisory']}>
      <h2>{i18n.formatMessage({ id: 'home_advisory_head' })}</h2>
      <section>
        <img src={banner[local]} alt="" />
      </section>
    </div>
  )
}

export default Advisory
