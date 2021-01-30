/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './styles/index.less'
import { useIntl } from 'umi'

interface PropTypes { }
const How: FC<PropTypes> = function (props) {
  const i18n = useIntl()

  const toggle = e => {
    const current = e.target;
    const parent = current ? current.parentNode : null;
    parent && parent.classList.toggle(styles.open);
  }

  return <div className={styles.how}>
    <section className={styles.banner}>
      <h2>How It Works</h2>
    </section>
    <section className={styles.what}>
      <h2 className={styles.title}>What are STOs - </h2>
      <h2 className={styles.title}>Security Token Offerings </h2>
    </section>
    <section className={styles.underlying}>
      <h3 className={`${styles.des} ${styles.mb30}`}>Security Tokens are digital representations of ownership of assets or economic rights, created via blockchain technology. They are widely regulated as securities in major jurisdictions worldwide.  </h3>
      <h3 className={styles.des}>Underlying assets (illustrative) </h3>
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
    <section className={styles.sto}>
      <h2 className={styles.title}>STOs present unprecedented benefits to issuers and investors </h2>
      <h3 className={`${styles.des} ${styles.m20}`}>Similar to traditional securities offering, but streamlined via digitization</h3>
      <div className={styles.sto_item}>
        <div className={styles.title_bg}>
          <h2 className={styles.title}>Pre-Issue Advisory</h2>
        ​</div>
        <div className={styles.item_des}>
          <img src={require('./images/Engage-professionals01.png')} alt=""/>
          <h2 className={styles.title}>Engage professionals​</h2>
          <h3 className={styles.des}>Financial advisors, legal counsel, tax advisor, STO advisor, listing venue​</h3>
        </div>
        <img className={styles.right_arrow} src={require('./images/right-arrow.png')} alt=""/>
        <div className={styles.item_des}>
          <img src={require('./images/Structuring.png')} alt=""/>
          <h2 className={styles.title}>Structuring</h2>
          <h3 className={styles.des}>Legal, tax and accounting issues in different jurisdictions​</h3>
        </div>
      </div>
      <div className={styles.sto_item}>
        <div className={`${styles.title_bg} ${styles.bg01}`}>
          <h2 className={styles.title}>Token Creation​</h2>
        ​</div>
        <div className={styles.item_des}>
          <img src={require('./images/Tokenization.png')} alt=""/>
          <h2 className={styles.title}>Tokenization​​</h2>
          <h3 className={styles.des}>Rules (e.g. selling restrictions, market scenarios) coded on <span>smart contracts</span></h3>
        </div>
        <img className={styles.right_arrow} src={require('./images/right-arrow.png')} alt=""/>
        <div className={styles.item_des}>
          <img src={require('./images/Investors.png')} alt=""/>
          <h2 className={styles.title}>Issuance</h2>
          <h3 className={styles.des}>Security tokens issued to qualified investors</h3>
          <h3 className={styles.des}><span>(T+0 near-instant settlement)</span></h3>
        </div>
      </div>
      <div className={styles.sto_item}>
        <div className={`${styles.title_bg} ${styles.bg01}`}>
          <h2 className={styles.title}>Why work with Atom 8?​</h2>
        ​</div>
        <div className={styles.item_des}>
          <img src={require('./images/Share-rights-distribution.png')} alt=""/>
          <h2 className={styles.title}>Corporate actions</h2>
          <h3 className={styles.des}><span>Automated dividend/ interest distribution</span></h3>
          <h3 className={styles.des}>(asset specific)</h3>
        </div>
        <img className={styles.right_arrow} src={require('./images/right-arrow.png')} alt=""/>
        <div className={styles.item_des}>
          <img src={require('./images/Future-proofed.png')} alt=""/>
          <h2 className={styles.title}>Secondary trading​</h2>
          <h3 className={styles.des}><span>24/7 market access​</span></h3>
        </div>
      </div>
    </section>
    <section className={styles.faqs}>
      <h2 className={styles.title}>{i18n.formatMessage({ id: 'how_faq_head' })}</h2>
      <aside>
          <h4>{i18n.formatMessage({ id: 'how_faq_iss_head' })}</h4>
          <ul>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_1' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_1' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_2' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_2' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_3' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_3' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_4' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_4' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_5' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_5' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_6' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_6' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_iss_q_7' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_iss_a_7' })}</p>
            </li>
          </ul>
      </aside>
      <aside>
          <h4>{i18n.formatMessage({ id: 'how_faq_inv_head' })}</h4>
          <ul>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_inv_q_1' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_inv_a_1' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_inv_q_2' })}</h6>
              <p>
                1. {i18n.formatMessage({ id: 'how_faq_inv_a_2_1_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_2_1_2' })}<br /><br />
                2. {i18n.formatMessage({ id: 'how_faq_inv_a_2_2_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_2_2_2' })}<br /><br />
                3. {i18n.formatMessage({ id: 'how_faq_inv_a_2_3_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_2_3_2' })}
              </p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_inv_q_3' })}</h6>
              <p>
                1. {i18n.formatMessage({ id: 'how_faq_inv_a_3_1_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_3_1_2' })}<br /><br />
                2. {i18n.formatMessage({ id: 'how_faq_inv_a_3_2_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_3_2_2' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_3_2_3' })}<br /><br />
                {i18n.formatMessage({ id: 'how_faq_inv_a_3_3_1' })}<br />
                - {i18n.formatMessage({ id: 'how_faq_inv_a_3_3_2' })}
              </p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_inv_q_4' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_inv_a_4' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_inv_q_5' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_inv_a_5' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_faq_inv_q_6' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_faq_inv_a_6' })}</p>
            </li>
          </ul>
      </aside>
    </section>
    <section className={styles.faqs}>
      <h2 className={styles.title}>{i18n.formatMessage({ id: 'how_academy_head' })}</h2>
      <aside>
          <h4>{i18n.formatMessage({ id: 'how_academy_sto_head' })}</h4>
          <ul>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_sto_q_1' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_academy_sto_a_1' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_sto_q_2' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_academy_sto_a_2' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_sto_q_3' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_academy_sto_a_3' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_sto_q_4' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_academy_sto_a_4' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_sto_q_5' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_academy_sto_a_5' })}</p>
            </li>
          </ul>
        </aside>
        <aside>
          <h4>{i18n.formatMessage({ id: 'how_academy_bc_head' })}</h4>
          <ul>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_bc_q_1' })}</h6>
              <p>{i18n.formatMessage({ id: 'how_academy_bc_a_1' })}</p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_bc_q_2' })}</h6>
              <p>
                {i18n.formatMessage({ id: 'how_academy_bc_a_2_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_academy_bc_a_2_2' })}
              </p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_bc_q_3' })}</h6>
              <p>
                {i18n.formatMessage({ id: 'how_academy_bc_a_3_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_academy_bc_a_3_2' })}
              </p>
            </li>
            <li>
              <h6 onClick={toggle}>{i18n.formatMessage({ id: 'how_academy_bc_q_4' })}</h6>
              <p>
                {i18n.formatMessage({ id: 'how_academy_bc_a_4_1' })}<br /><br />
                {i18n.formatMessage({ id: 'how_academy_bc_a_4_2' })}<br /><br />
                {i18n.formatMessage({ id: 'how_academy_bc_a_4_3' })}
              </p>
            </li>
          </ul>
        </aside>
    </section>
  </div>
}

export default How
