import React, { useState, useEffect, memo } from 'react'
import styles from '../index.less'
import { CallBackModel, HistoryCities, CityModel } from '../interfaces'
import { PartOperation } from '../interfaces/enums';
interface PropTypes {
  item: CityModel,
  callBack?: (args: CallBackModel<HistoryCities>) => any
}
function CityItem(props: PropTypes) {
  const { callBack, item } = props;
  useEffect(() => { }, [])
  const clickCity = (item, cid?: number) => {

    let obj: CallBackModel<HistoryCities> = {
      data: item,
      type: PartOperation.selectedCity
    };
    callBack && callBack(obj)
  }
  return (
    <>
      <li
        onClick={() => clickCity(item)}
        className={styles['item']}
      >
        {item.name}
      </li>
    </>
  )
}
export default memo(CityItem)
