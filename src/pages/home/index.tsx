/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './styles/index.less'
import { useIntl } from 'umi'
interface PropTypes {}
const Home: FC<PropTypes> = function (props) {
  const i18n = useIntl()
  return (
    <div className={styles.home}>
      <section className={styles.banner}>
        <h2>{i18n.formatMessage({ id: 'home_banner_head1' })}</h2>
        <h2>{i18n.formatMessage({ id: 'home_banner_head2' })}</h2>
        <h3>{i18n.formatMessage({ id: 'home_banner_text' })}</h3>
        <a>{i18n.formatMessage({ id: 'home_getintouch' })}</a>
      </section>
      <section className={styles.highcosts}></section>
      <section className={styles.values}></section>
      <section className={styles.why}></section>
      <section className={styles.advisory}></section>
      <section className={styles.products}></section>
      <section className={styles.partners}></section>
    </div>
  )
}

export default Home
