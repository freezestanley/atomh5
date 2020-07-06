import React, { Component } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import styles from './index.less';

const closebg = require('@/assets/close.png');

class AdvDrawer extends Component {
  render() {
    const { visible, onClose, children, bodyStyle } = this.props;
    const { width } = this.props;
    return (
      <Drawer width={width} bodyStyle={bodyStyle} visible={visible} {...this.props}>
        <span
          className={styles['drawer-close']}
          style={{ backgroundImage: `url(${closebg})`, backgroundSize: '100%' }}
          onClick={onClose}
        >
          <CloseOutlined style={{ fontSize: 14, color: '#bcbcbc' }} />
        </span>
        {children}
      </Drawer>
    );
  }
}
// eslint-disable-next-line react/static-property-placement
AdvDrawer.defaultProps = {
  width: 1100,
  closable: false,
  placement: 'right',
  maskClosable: true,
  bodyStyle: { padding: '40px 80px' },
};

export default AdvDrawer;
