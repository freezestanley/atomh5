import React, { memo } from 'react'
import { CallBackModel, HistoryCities, HotCity } from '../interfaces'
import styles from '../index.less'
import classnames from 'classnames';
import { PartOperation } from '../interfaces/enums';
import CityItem from './cityItem'
interface PropTypes {
  /** 历史访问城市数据 */
  historyCities: HistoryCities[]
  /** 事件回调 */
  callBack?: (args: CallBackModel<HistoryCities>) => any
}
function HistoryCitiesPart(props: PropTypes) {
  const { historyCities, callBack } = props;
  function changeCity(args: CallBackModel<HotCity>) {
    callBack && callBack(args)
  }
  return (
    <div className={styles.current_city}>
      <h3>最近访问</h3>
      <ul className={styles.history}>
        {
          historyCities
          && historyCities.length > 0
          && historyCities.map((item, index) => (
            <CityItem item={item} key={index} callBack={changeCity} />
          ))
        }
      </ul>
    </div>
  )
}
export default memo(HistoryCitiesPart)
