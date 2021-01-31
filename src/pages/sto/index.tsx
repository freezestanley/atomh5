/**
 * @description 描述
 */
import React, { FC } from 'react'
import styles from './styles/index.less'
import { useIntl } from 'umi'
interface PropTypes {}
const STO: FC<PropTypes> = function (props) {
  const intl = useIntl()
  return <div className={styles['sto']}>
    <div className={ styles['sto_banner']}>
      <h1>{intl.formatMessage({
            id: 'list_label',
          })}</h1>
      <h2>{intl.formatMessage({
              id: 'list_comingsoon',
            })}</h2>
      <div className={styles['sto_email']}>
            {/* <Input
              ref={btnRef}
              placeholder={intl.formatMessage({
                id: 'sto_email_placeholder',
              })}
              onChange = {(e) => {changehandle(e) }}
              className={styles['sto_emailInput']}
            />
            <Button className={styles['sto_submit']} onClick={(e) => {fetchData(e) } }>
              {intl.formatMessage({
                id: 'sto_email_submit',
              })}
            </Button> */}
          </div>
      <p>{intl.formatMessage({
              id: 'sto_nolist_privacy',
            })}</p>
    </div>
  </div>
}

export default STO
