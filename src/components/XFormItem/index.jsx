import React from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import styles from './index.less';

const XFormInput = (props) => {
  const { Item } = Form;
  const {
    label,
    labelWidth = 'auto',
    required,
    children,
    width,
    marginBottom = 24,
    marginRight = 20,
    tips,
    style,
    isRequired,
    className,
    labelStyle = {},
  } = props;
  return (
    <div
      className={`${styles['comp_form-item-wrap']} ${className || ''}`}
      style={{ width, marginBottom, ...style }}
    >
      {label && (
        <div
          className={`comp_form-item_label ${required ? 'label-required' : ''}`}
          style={{ marginRight, width: labelWidth, ...labelStyle }}
        >
          {label}
          {isRequired && <em style={{ color: '#f62f39' }}>*</em>}
        </div>
      )}
      <div className="form-item-content">
        <Item>
          {children}
          {tips && <div className="comp_form-item_tips">{tips}</div>}
        </Item>
      </div>
    </div>
  );
};

export default XFormInput;
