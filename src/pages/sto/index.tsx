/**
 * @description 描述
 */
import React, { FC, useRef, useState } from 'react'
import styles from './styles/index.less'
import { useIntl } from 'umi'
import { CMS } from '@/api';

interface PropTypes {}
const STO: FC<PropTypes> = function (props) {
  const success = useRef(null)
  const fail = useRef(null)
  const btnRef = useRef(null)
  const timid = useRef(null)
  const [ emilState, setEmilStage ] = useState('');

  const intl = useIntl();
  const changehandle = (e) => {
    setEmilStage(e.target.value)
  }

  async function fetchData(e) {
    let res;
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (reg.test(emilState)) {
      try {
        res = await CMS.CmsSubscription({
          email: emilState,
        });
        showSuccess()
      } catch (error) {
        showFail()
      }
    } else {
      showFail()
    }
    return
  }
  const showFail = () => {
    let div = document.createElement('div')
    div.className = `${styles['sto_fail']}`
    let mask = document.getElementById('mask')
    mask.appendChild(div)
    div.innerHTML = `
      <span>${intl.formatMessage({
        id: 'sto_coming_error',
      })}</span>
    `
    showMask()
  }

  const showSuccess = () => {
    let div = document.createElement('div')
    div.className = `${styles['sto_success']}`
    let mask = document.getElementById('mask')
    mask.appendChild(div)
    div.innerHTML = `
      <span>${intl.formatMessage({
        id: 'sto_coming_success',
      })}</span>
    `
    showMask()
  }
  const showMask = () => {
    let mask = document.getElementById('mask')
    mask.style.display = 'block'
    mask.style.position = 'absolute'
    mask.style.width = '100vw'
    mask.style.background = 'rgba(0,0,0,.2)'
    mask.style.top = '0'
    mask.style.left = '0'
    mask.style.height = `${document.body.clientHeight}px`
    document.body.style.overflow = 'hidden'
    window.clearTimeout(timid.current)
    timid.current = window.setTimeout(() => {
      mask.style.display = 'none'
      document.body.style.overflow = 'initial'
    }, 3000)
  }
  const hideMask = () => {
    let mask = document.getElementById('mask')
    mask.style.display = 'none'
  }
  return <div className={styles['sto']}>
    <div className={ styles['sto_banner']}>
      <h1>{intl.formatMessage({
            id: 'list_label',
          })}</h1>
      <h2>{intl.formatMessage({
              id: 'list_comingsoon',
            })}</h2>
      <div className={styles['sto_email']}>
            <input
              ref={btnRef}
              placeholder={intl.formatMessage({
                id: 'sto_email_placeholder',
              })}
              onChange = {(e) => {changehandle(e) }}
              className={styles['sto_emailInput']}
            />
            <button className={styles['sto_submit']} onClick={(e) => {fetchData(e) } }>
              {intl.formatMessage({
                id: 'sto_email_submit',
              })}
            </button>
      </div>

      <p>{intl.formatMessage({
              id: 'sto_nolist_privacy',
            })}</p>
    </div>
  </div>
}

export default STO
