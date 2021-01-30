/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './styles/index.less'
import { useIntl } from 'umi'

interface PropTypes { }
const How: FC<PropTypes> = function (props) {
  const i18n = useIntl()

  return <div className={styles.how}>
    <section className={styles.banner}>
      <h2>How It Works</h2>
    </section>
    <section className={styles.what}>
      <h2>What are STOs -</h2>
      <h2>Security Token Offerings </h2>
    </section>
    <section className={styles.underlying}>
      <h3 className={styles.mb30}>Security Tokens are digital representations of ownership of assets or economic rights, created via blockchain technology. They are widely regulated as securities in major jurisdictions worldwide.  </h3>
      <h3>Underlying assets (illustrative) </h3>
      <ul>
        <li>
          <div></div>
          <div>
            <h2>Equity</h2>
            <p>Common shares</p>
            <p>Preferred shares</p>
            <p>Voting, non-voting shares</p>
            <p>REIT shares</p>
          </div>
        </li>
        <li>
          <div></div>
          <div>
            <h2>Debt</h2>
            <p>Bonds</p>
            <p>Asset Backed Securities</p>
            <p>VSustainability-linked green financing projects (e.g. green financing)</p>
          </div>
        </li>
        <li>
          <div></div>
          <div>
            <h2>Debt</h2>
            <p>Mutual fund</p>
            <p>Hedge fund</p>
            <p>Private Equity fund</p>
          </div>
        </li>
        <li>
          <div></div>
          <div>
            <h2>Debt</h2>
            <p>Real properties, real estate</p>
            <p>Intellectual Property rights</p>
            <p>Fine arts</p>
            <p>Fine wine</p>
            <p>Etc.</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
}

export default How
