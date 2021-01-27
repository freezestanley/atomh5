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
        <div>{i18n.formatMessage({ id: 'home_getintouch' })}</div>
      </section>
      <section className={styles.highcosts}>
        <h2>{i18n.formatMessage({ id: 'home_costs_head' })}</h2>
        <ul>
          <li>
            <h3>
              {i18n.formatMessage({ id: 'home_costs_item_head_1_1' })}
              <br />
              {i18n.formatMessage({ id: 'home_costs_item_head_1_2' })}
            </h3>
            <p>{i18n.formatMessage({ id: 'home_costs_item_text_1' })}</p>
          </li>
          <li>
            <h3>
              {i18n.formatMessage({ id: 'home_costs_item_head_2_1' })}
              <br />
              {i18n.formatMessage({ id: 'home_costs_item_head_2_2' })}
            </h3>
            <p>{i18n.formatMessage({ id: 'home_costs_item_text_2' })}</p>
          </li>
          <li>
            <h3>
              {i18n.formatMessage({ id: 'home_costs_item_head_3_1' })}
              <br />
              {i18n.formatMessage({ id: 'home_costs_item_head_3_2' })}
            </h3>
            <p>{i18n.formatMessage({ id: 'home_costs_item_text_3' })}</p>
          </li>
          <li>
            <h3>
              {i18n.formatMessage({ id: 'home_costs_item_head_4_1' })}
              <br />
              {i18n.formatMessage({ id: 'home_costs_item_head_4_2' })}
            </h3>
            <p>{i18n.formatMessage({ id: 'home_costs_item_text_4' })}</p>
          </li>
        </ul>
      </section>
      <section className={styles.values}></section>
      <section className={styles.why}></section>
      <section className={styles.advisory}></section>
      <section className={styles.products}></section>
      <section className={styles.partners}></section>
    </div>
  )
}

export default Home
