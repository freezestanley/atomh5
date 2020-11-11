import React, { memo, useEffect, useState } from 'react';
import {
  ListView, SearchBar, Icon as Icons, Toast, ActivityIndicator
} from 'antd-mobile';
import HistoryCitiesPart from './components/historyCitiesPart'
import HotCityPart from './components/hotCityPart'
import styles from './index.less'
import * as types from './interfaces'
import { PartOperation } from './interfaces/enums'
import { commonApi } from './sdkLocation'
import { Citys } from '@/api'
import { Icon } from 'zarm'
import { ReactComponent as positionAddress } from './icon/address.svg'
import errorHandle from '@/api/middleware/errorHandle'
import { getCookie, getLocalStorage, setLocalStorage } from './util'
interface PropTypes {
  /** 所有城市数据 */
  cityList?: types.CityModel[]
  /** 当前选中城市 */
  curentCity?: types.CityModel
  /**
   * 关闭回调事件
   * @param city 选中的城市对象
   * @param id 选择的城市ID
   */
  onClose?: (city?: types.CityModel, id?: number) => any
}

/**
 * 处理城市数据
 * @param ds 源数据
 * @param cityList 城市数据
 */
function genData(ds, cityList) {
  const dataBlob = {}; // 城市ID 和名字的Map
  let sectionIDs = []; // 标志的集合 [ 'A', 'B', 'C']
  let rowIDs = []; // 城市ID的集合 [[], [], []]
  // 处理数据
  const Emptyobj = {};
  const obj = {};
  cityList && cityList.forEach((item) => {
    dataBlob[item.cityId] = item.name;
    Emptyobj[item.first] = item.first.toLocaleUpperCase();
    if (obj[item.first]) {
      obj[item.first].push(item.cityId);
    } else {
      obj[item.first] = [];
      obj[item.first].push(item.cityId);
    }
  });
  rowIDs = Object.values(obj);
  sectionIDs = Object.values(Emptyobj)
  return ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);
}
const getRowData = (dataBlob, sectionID, rowID) => { return dataBlob[rowID] };
const getSectionData = (dataBlob, sectionID) => { return sectionID };

// 城市组件
function SelectCityPart(props: PropTypes) {
  const { onClose, curentCity, cityList = [] } = props
  const [historyCities, setHistoryCities] = useState<types.HistoryCities[]>([]),
    [hotCity, setHotCity] = useState<types.HotCity[]>([]),
    [showLoading, setShowLoading] = useState<boolean>(true),
    [inputValue, setInputValue] = useState(''),
    [dataSource, setDataSource] = useState(new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    })),
    [address, setAddress] = useState<any>()

  useEffect(() => {
    // 外部没有传cityList数据源直接内部获取
    if (cityList && cityList.length < 1) {
      fetchCityList()
    } else {
      setDataSource(genData(dataSource, cityList))
    }
  }, [])

  useEffect(() => {
    // 获取系统定位
    commonApi.initUserLoaction()
  }, [])

  useEffect(() => {
    // 获取定位城市
    setAddress(getCookie('address'))
  }, [address])

  /**
   * 获取所有城市数据
   */
  async function fetchCityList() {
    try {
      Citys.getCityList({ city: curentCity?.cityId || 145, cityId: curentCity?.cityId || 145, platform: 1 }).then(data => {
        if (Number(data.respCode) === 0) {
          setDataSource(genData(dataSource, data.cityList))
          setHotCity(data.hotCities)
          setHistoryCities(data.historyCities)
          if (!JSON.parse(getLocalStorage('cityList')) || (getLocalStorage('cityList') != JSON.stringify(data.cityList))) {
            setLocalStorage('cityList', data.cityList)
          }
          if (!JSON.parse(getLocalStorage('hotCities')) || (getLocalStorage('hotCities') != JSON.stringify(data.hotCities))) {
            setLocalStorage('hotCities', data.hotCities)
          }
          if (!JSON.parse(getLocalStorage('historyCities')) || (getLocalStorage('historyCities') != JSON.stringify(data.historyCities))) {
            setLocalStorage('historyCities', data.historyCities)
          }
          setShowLoading(false)
        }
      })
    } catch (error) {
      console.log(error)
      setShowLoading(false)
    }
  }
  const renderHeader = (section) => (<div style={{ color: '#999999' }}>{section}</div>)
  const seeRowData = (rowData, sectionID, rowID) => (
    <div
      key={rowID}
      onClick={() => {
        const item: types.CityModel = {
          cityId: rowID,
          name: rowData,
        }
        changeCity(item, rowID)
      }}
      className={styles.rowItem}
    >
      {rowData}
    </div>
  )

  // 搜索
  const onSearch = (val) => {
    setInputValue(val)
    let list = JSON.parse(getLocalStorage('cityList'))
    let arr = [];
    if (val) {
      val = val.toLowerCase();
      arr = list.filter((city) => (
        city.pinyin.toLowerCase().indexOf(val.toLowerCase()) !== -1
        || city.name.indexOf(val) !== -1
      ));
      setDataSource(genData(dataSource, arr));
    } else {
      arr = [];
      setDataSource(genData(dataSource, list));
    }
  }
  // 清空搜索
  const searchClear = () => {
    setInputValue('')
    setDataSource(genData(dataSource, JSON.parse(getLocalStorage('cityList'))))
  }

  // 子组件回调
  const partCallBack = (args: types.CallBackModel<types.CityModel>) => {
    switch (args.type) {
      case PartOperation.selectedCity:
        changeCity(args.data, args.data.cityId)
        break;
    }
  }

  // 调用外层回调--切换城市
  const changeCity = (item: types.CityModel, id: number) => {
    onClose && onClose(item, id)
  }

  // 锚点定位
  const onQuickSearch = (id) => {
    if (!id) {
      Toast.info('热门', 0.5);
      return;
    }
    Toast.info(<div className={styles.toast_SELECT_CITY}>{id}</div>, 0.5, null, false);
  }

  // 关闭按钮回调
  const backBefore = () => {
    console.log('onClose')
    onClose && onClose();
  }

  // 历史&热门
  const renderHotAndCity = () => {
    return <>
      {!inputValue && (<div><HistoryCitiesPart historyCities={historyCities} callBack={partCallBack}></HistoryCitiesPart>
        <HotCityPart hotCity={hotCity} callBack={partCallBack}></HotCityPart></div>)}
    </>
  }

  return (
    <>
      <div className={styles.cityContainer}>
        <div className={styles.search_header}>
          <div className={styles.search_row1}>
            <div onClick={backBefore}>
              <span className="iconfont" style={{ fontSize: '25px' }}>&#xe61b;</span>
            </div>
            <SearchBar
              value={inputValue}
              placeholder="输入城市或者首字母"
              onChange={onSearch}
              onClear={searchClear}
              onCancel={searchClear}
              showCancelButton={false}
            />
          </div>
          {
            !inputValue && (<div className={styles.header_city}>
              <Icon component={positionAddress} />
              <span>{address && address.name || '上海'}</span>
            GPS定位
            </div>)
          }
        </div>
        <ListView.IndexedList
          dataSource={dataSource}
          className="am-list sticky-list"
          useBodyScroll={false}
          renderSectionHeader={renderHeader} // 标题
          renderHeader={renderHotAndCity}
          renderRow={seeRowData}
          onQuickSearch={onQuickSearch}
          quickSearchBarStyle={{
            top: '52%',
            transform: 'translateY(-50%)',
            right: '10px',
          }}
          delayTime={100}
          delayActivityIndicator={<div style={{ padding: 10, textAlign: 'center' }}><Icons type="loading" /></div>}
          quickSearchBarTop={{ value: '#', label: '热' }}
        />
        <div className="toast-example">
          <ActivityIndicator
            toast
            text="加载中..."
            animating={showLoading}
          />
        </div>
      </div>

    </>
  )
}
export default memo(SelectCityPart)
