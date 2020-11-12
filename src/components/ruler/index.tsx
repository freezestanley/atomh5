import React, { useState, useEffect, memo } from 'react'
import initPlugin from "./components/ruler";
import style from './styles/index.less'
interface PropTypes {
  defaultValue: number | string
  rulerId: 'height' | 'weight'
  answerValue: string[]
  answerCode: string
  changeValue: (val, answerCode) => void
}
function Ruler(props: PropTypes) {
  const { rulerId, answerValue = ['0', '300'], answerCode, defaultValue = 100, changeValue } = props
  const [val, setVal] = useState(defaultValue)
  useEffect(() => {
    initPlugin({
      el: rulerId, //容器id
      height: 50, //刻度尺高度
      maxScale: Number(answerValue[1]), //最大刻度
      startValue: Number(defaultValue), //刻度开始的初始值
      region: answerValue.map(Number), //选择刻度的区间范围
      background: "#fff", //刻度尺背景色
      color: "#666", //字体的颜色
      markColor: "#3D96E2", //中心刻度标记颜色
      isConstant: true, //是否不断地获取值,区别是松开屏幕执行success回调还是滑动过程就执行success回调
      division: 44, // 可视窗口下展示多少格的刻度
      success: res => {
        setVal(res)
        changeValue(res, answerCode)
      }
    });
  }, [defaultValue])
  return (
    <div className={style['rulerWrap']}>
      <div className={style['rulerWrap-value']}>
        {val}
        <span className={style['rulerWrap-unit']}>{rulerId === 'height' ? "厘米" : "千克"}</span>
      </div>
      <div id={props.rulerId}></div>
    </div>)
}
export default memo(Ruler)
