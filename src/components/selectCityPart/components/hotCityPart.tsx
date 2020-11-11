import React, { memo } from 'react'
import { CallBackModel, HotCity } from '../interfaces'
import styles from '../index.less'
import { PartOperation } from '../interfaces/enums';
import CityItem from './cityItem'
interface PropTypes {
  /** 热门城市数据 */
  hotCity: HotCity[]
  /** 事件回调 */
  callBack?: (args: CallBackModel<HotCity>) => any
}
function HotCityPart(props: PropTypes) {
  const { hotCity, callBack } = props;

  function changeCity(args: CallBackModel<HotCity>) {
    callBack && callBack(args)
  }
  return (
    <div className={styles.hot_city}>
      <h3>热门城市</h3>
      <ul>
        {
          hotCity
          && hotCity.length > 0
          && hotCity.map((item, index) => (
            <CityItem item={item} callBack={changeCity} key={index} />
          ))
        }
      </ul>
    </div>
  )
}
export default memo(HotCityPart)
