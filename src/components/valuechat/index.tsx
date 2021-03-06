import React, { FC, useRef } from 'react'
import styles from './styles/index.less'
import { useIntl } from 'umi'

interface PropTypes { }

const Valuechart: FC<PropTypes> = function (props) {
  const i18n = useIntl()

  return <div className={ styles['ValueChat']}>
    <h1>{i18n.formatMessage({ id: 'home_values_chart_head' })}</h1>

    <div className={styles['treeicon']}>
        <dl className={ styles['tree_list']}>
          <dt>{i18n.formatMessage({ id: 'home_values_chart_item_head_1' })}</dt>
          <dd>{i18n.formatMessage({ id: 'home_values_chart_item_text_1_1' })}​</dd>
          <dd>{i18n.formatMessage({ id: 'home_values_chart_item_text_1_2' })}​</dd>
          <dd>{i18n.formatMessage({ id: 'home_values_chart_item_text_1_3' })}</dd>
          <dd>{i18n.formatMessage({ id: 'home_values_chart_item_text_1_4' })}</dd>
          <dd>{i18n.formatMessage({ id: 'home_values_chart_item_text_1_5' })}​</dd>
        </dl>
      <div className={styles['treeicon_box']}>
        <h2>{i18n.formatMessage({ id: 'home_values_chart_text' })}</h2>
        <div className={ styles['ps']}>
          <h1>{i18n.formatMessage({ id: 'home_values_chart_item_head_2' })}</h1>
          <h3>{i18n.formatMessage({ id: 'home_values_chart_item_text_2' })}</h3>
        </div>
        <div className={ styles['coin']}>
          <h1>{i18n.formatMessage({ id: 'home_values_chart_item_head_3' })}​​</h1>
        </div>
        <div className={ styles['dt']}>
          <h1>{i18n.formatMessage({ id: 'home_values_chart_item_head_4' })}​​​​</h1>
          <h3>{i18n.formatMessage({ id: 'home_values_chart_item_text_4' })}​​​​</h3>
        </div>
      </div>
      <div className={styles['tree_Investors']}>{i18n.formatMessage({ id: 'home_values_chart_item_head_5' })}</div>
      <div className={styles['tree_sponsors'] }>{i18n.formatMessage({ id: 'home_values_chart_comment_1' })}</div>
      <div className={ styles['tree_broker']}>{i18n.formatMessage({ id: 'home_values_chart_comment_2' })}</div>
    </div>

  </div>
}
export default Valuechart
