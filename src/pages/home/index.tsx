/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './styles/index.less'
import { useIntl } from 'umi'
import Valuechat from '@/components/valuechat'
import Advisory from '@/components/advisory'
const logos = {
  hkbitex: require('./images/logo-hkbitex.png'),
}
const partnersLogo = [
  require('./images/partner/University_of_Hong_Kong-Logo.wine.svg'),
  require('./images/partner/HKSI.png'),
  require('./images/partner/Cyberport_Logo_Master-01.png'),
  require('./images/partner/kingandwoodmallesonslogo.png'),
  require('./images/partner/redsolar.jpg'),
  require('./images/partner/deloitte-2.svg'),
  require('./images/partner/ftahk.png'),
]
interface PropTypes {}
const Home: FC<PropTypes> = function (props) {
  const i18n = useIntl()

  const openIssueDialog = (e) => {
    const section = e.target.parentNode.parentNode
    section.classList.remove(styles.invest)
  }

  const openInvestDialog = (e) => {
    const section = e.target.parentNode.parentNode
    section.classList.add(styles.invest)
  }

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
              {/* <br /> */}
              {i18n.formatMessage({ id: 'home_costs_item_head_1_2' })}
            </h3>
            <p>{i18n.formatMessage({ id: 'home_costs_item_text_1' })}</p>
          </li>
          <li>
            <h3>
              {i18n.formatMessage({ id: 'home_costs_item_head_2_1' })}
              {/* <br /> */}
              {i18n.formatMessage({ id: 'home_costs_item_head_2_2' })}
            </h3>
            <p>{i18n.formatMessage({ id: 'home_costs_item_text_2' })}</p>
          </li>
          <li>
            <h3>
              {i18n.formatMessage({ id: 'home_costs_item_head_3_1' })}
              {/* <br /> */}
              {i18n.formatMessage({ id: 'home_costs_item_head_3_2' })}
            </h3>
            <p>{i18n.formatMessage({ id: 'home_costs_item_text_3' })}</p>
          </li>
          <li>
            <h3>
              {i18n.formatMessage({ id: 'home_costs_item_head_4_1' })}
              {/* <br /> */}
              {i18n.formatMessage({ id: 'home_costs_item_head_4_2' })}
            </h3>
            <p>{i18n.formatMessage({ id: 'home_costs_item_text_4' })}</p>
          </li>
        </ul>
      </section>
      <div className={styles.values}>
        <h2>{i18n.formatMessage({ id: 'home_values_head' })}</h2>
        <div className={styles.box}>
          <Valuechat />
        </div>
        {/* <div className={styles.bg}></div> */}
      </div>
      <section className={styles.why}>
        <h2>{i18n.formatMessage({ id: 'home_why_head' })}</h2>
        <ul>
          <li>
            <h3>
              {i18n.formatMessage({ id: 'home_why_item_head_1' })}
              {/* <br /> */}
            </h3>
            <p>
              {i18n.formatMessage({ id: 'home_why_item_text_1_1' })}
              {i18n.formatMessage({ id: 'home_why_item_text_1_2' })}
            </p>
          </li>
          <li>
            <h3>{i18n.formatMessage({ id: 'home_why_item_head_2' })}</h3>
            <p>{i18n.formatMessage({ id: 'home_why_item_text_2_1' })}</p>
          </li>
          <li>
            <h3>
              {i18n.formatMessage({ id: 'home_why_item_head_3' })}
              {/* <br /> */}
              {/* {i18n.formatMessage({ id: 'home_costs_item_head_3_2' })} */}
            </h3>
            <p>{i18n.formatMessage({ id: 'home_why_item_text_3_1' })}</p>
            <p>{i18n.formatMessage({ id: 'home_why_item_text_3_2' })}</p>
            <p>{i18n.formatMessage({ id: 'home_why_item_text_3_3' })}</p>
          </li>
          <li>
            <h3>{i18n.formatMessage({ id: 'home_why_item_head_4' })}</h3>
            <p>{i18n.formatMessage({ id: 'home_why_item_text_4_1' })}</p>
          </li>
        </ul>
      </section>
      <section className={styles.advisory}>
        <Advisory />
      </section>
      <section className={styles.products}>
        <h2>{i18n.formatMessage({ id: 'home_products_head' })}</h2>
        <div className={styles.tabs}>
          <a onClick={openIssueDialog}>
            {i18n.formatMessage({ id: 'home_products_choose_text_1' })}
          </a>
          <a onClick={openInvestDialog}>
            {i18n.formatMessage({ id: 'home_products_choose_text_2' })}
          </a>
        </div>
        <h4>{i18n.formatMessage({ id: 'home_products_text' })}</h4>
        <ul>
          <li>
            <h5>{i18n.formatMessage({ id: 'home_products_item_head_1' })}</h5>
            <p className={styles.list}>
              {i18n.formatMessage({ id: 'home_products_item_text_1_1' })}
            </p>
            <p className={styles.list}>
              {i18n.formatMessage({ id: 'home_products_item_text_3_1' })}
            </p>
            <p className={styles.list}>
              {i18n.formatMessage({ id: 'home_products_item_text_3_2' })}
            </p>
          </li>
          <li>
            <h5>{i18n.formatMessage({ id: 'home_products_item_head_2' })}</h5>
            <p className={styles.list}>
              {i18n.formatMessage({ id: 'home_products_item_text_2_1' })}
            </p>
            <p className={styles.list}>
              {i18n.formatMessage({ id: 'home_products_item_text_2_2' })}
            </p>
            <p className={styles.list}>
              {i18n.formatMessage({ id: 'home_products_item_text_2_3' })}
            </p>
            <p className={styles.list}>
              {i18n.formatMessage({ id: 'home_products_item_text_2_4' })}
            </p>
            <p className={styles.list}>
              {i18n.formatMessage({ id: 'home_products_item_text_2_5' })}
            </p>
            <p className={styles.list}>
              {i18n.formatMessage({ id: 'home_products_item_text_2_6' })}
            </p>
          </li>
          <li>
            <h5>{i18n.formatMessage({ id: 'home_products_item_head_3' })}</h5>
            <p className={styles.list}>
              {i18n.formatMessage({ id: 'home_products_item_text_3_1' })}
            </p>
            <p className={styles.list}>
              {i18n.formatMessage({ id: 'home_products_item_text_3_2' })}
            </p>
          </li>
        </ul>
        <article>
          <img src={logos.hkbitex} />
          <a>{i18n.formatMessage({ id: 'home_products_invest_subscribe' })}</a>
          <p>{i18n.formatMessage({ id: 'home_products_invest_comment' })}</p>
        </article>
      </section>
      <section className={styles.partners}>
        <h2>{i18n.formatMessage({ id: 'home_partners_head' })}</h2>
        <ul>
          <li>
            <img src={partnersLogo[0]} alt="" />
            <img src={partnersLogo[1]} alt="" />
          </li>
          <li>
            <img src={partnersLogo[2]} alt="" />
            <img src={partnersLogo[3]} alt="" />
          </li>
          <li>
            <img src={partnersLogo[4]} alt="" />
            <img src={partnersLogo[5]} alt="" />
          </li>
          <li>
            <img src={partnersLogo[6]} alt="" />
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Home
