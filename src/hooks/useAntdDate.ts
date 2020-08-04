/**
 * @description 将项目自定义的antd date属性封装
 */
import Moment, { isMoment } from 'moment'

export default function useAntdDate() {
  const format = 'YYYY-MM-DD HH:mm:ss'
  function formatFn(value: string) {
    return Moment(value).format(format)
  }
  function disabledBeforeDate(current: Moment.Moment) {
    return current && current < Moment().endOf('day')
  }
  function datePickerProps() {
    return {
      format,
      showTime: true,
    }
  }
  return {
    format,
    formatFn,
    isMoment,
    Moment,
    disabledBeforeDate,
    datePickerProps: datePickerProps(),
  }
}
