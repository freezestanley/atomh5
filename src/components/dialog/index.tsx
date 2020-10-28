import React, { useState, useEffect, memo, forwardRef, useImperativeHandle } from 'react'
import { FormInstance } from 'antd/lib/form'
import { Icon, Popup } from 'zarm';
import styles from './style/index.less'
/**
 * title:dialog标题
 * onClose: 关闭方法
 */
interface PropTypes {
  children: React.ReactChild,
  title?: string,
  onClose?: () => void,
}
const Dialog = (props: PropTypes, ref) => {
  const { title, children, onClose } = props,
    [visable, setVisable] = useState<boolean>(false)

  /**
   * 关闭弹窗
   * @param type 是否只是关闭弹窗无其他操作
   */
  function close(type: number) {
    if (type) {
      setVisable(false)
      return
    }
    onClose && onClose()
    setVisable(false)
  }

  useImperativeHandle(ref, () => ({
    onOpen: () => setVisable(true),
  }))

  return (
    <div>
      <Popup
        visible={visable}
        direction="bottom"
        onMaskClick={() => { close(1) }}
      >
        <div className={styles['dialog']}>
          <div className={styles['dialog-title']} >
            {title && (<span>{title}</span>)}
            <Icon type="wrong" className={styles['dialog-title-close']} onClick={() => { close(1) }} />
          </div>
          <div>{children}</div>
        </div>
      </Popup>
    </div>

  )
}

export default forwardRef(Dialog)
