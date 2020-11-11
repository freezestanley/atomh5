import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react'
import { Button, Toast, Modal } from 'zarm'
import saveimg from './imgs/saveimg.png'
import delimg from './imgs/delimg.png'
import style from './index.less'

/**
 * text: 弹框文本内容
 * btnText: 弹框确认文本
 * isDel: 是否是删除
 * onClose: 关闭事件
 */
interface PropsType {
  text: string
  btnText: string
  isDel?: boolean
  onClose?: () => void
}
const handleBack = () => {
  history.go(-1)
}

const ZarmModal = (props: PropsType, ref) => {
  const { isDel = false } = props
  const [visible, setVisible] = useState(false)
  const modalRef = useRef()

  const onOpen = useCallback(() => {
    setVisible(true)
  }, [])

  const onClose = useCallback(() => {
    props.onClose && props.onClose()
    closeModal()
  }, [])

  function closeModal() {
    setVisible(false)
  }

  const getMountContainer = useCallback(() => {
    return modalRef.current
  }, [])

  useImperativeHandle(ref, () => ({ onOpen: () => setVisible(true) }))

  return (
    <div className={style['modal']} ref={modalRef}>
      <Modal
        visible={visible}
        maskClosable
        onCancel={closeModal}
        mountContainer={getMountContainer}
      >
        <div className={style['modal-info']}>
          <img src={isDel ? delimg : saveimg} className={style['modal-info-img']} />
          <div className={style['modal-info-text']}>{props.text}</div>
          <div className={style['modal-info-button']}>
            <Button
              block={false}
              size="sm"
              className={style['modal-info-button-buttonLeft']}
              onClick={closeModal}
            >
              再想想
            </Button>
            <Button
              block={false}
              size="sm"
              className={style['modal-info-button-buttonRight']}
              onClick={isDel ? onClose : handleBack}
            >
              {props.btnText}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default forwardRef(ZarmModal)
