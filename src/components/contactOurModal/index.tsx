/**
 * @description 描述
 */
import React, { FC, CSSProperties, useRef } from 'react';
import { Modal, Form, Input, message } from 'antd';
import { useIntl } from 'umi';
import { FormInstance } from 'antd/lib/form';
import { USER } from '@/api';
import pattern from '@/utils/pattern';
import { PostContactReq } from '@/api/modules/user/interface';
import styles from './styles/index.less';
const close = require('./images/icon-close.png');
const { TextArea } = Input;
interface PropTypes {
  visible: boolean;
  title?: string;
  onClose: () => void;
}
const ContactMeModal: FC<PropTypes> = function({
  title = '',
  visible,
  onClose,
}) {
  const i18n = useIntl();
  const [form] = Form.useForm();
  const ref = useRef<FormInstance>();
  const bodyStyles: CSSProperties = {
    borderRadius: '20px',
    background: '#f8fbfc',
    paddingTop: '50px',
    padding: '50px 100px',
    paddingBottom: '57px',
  };
  async function onSubmit() {
    try {
      const values: PostContactReq = await ref.current.validateFields();
      console.log(values);
      if (!values) return;
      const res: ResType = await USER.PostContact(values);
      if (res.code === 0) {
        message.success('提交成功');
        onClose();
      }
    } catch (error) {
      console.warn(error);
    }
  }
  return (
    <Modal
      title={title}
      width={670}
      visible={visible}
      destroyOnClose
      onCancel={onClose}
      wrapClassName={styles['contact-our-modal']}
      footer={null}
      bodyStyle={bodyStyles}
    >
      <div className={styles['contact-our']}>
        <h2>{i18n.formatMessage({ id: 'home_contact_head' })}</h2>
        <p className={styles['text']}>
          {i18n.formatMessage({ id: 'home_contact_text' })}
        </p>
        <Form form={form} ref={ref}>
          <Form.Item
            label=""
            name="name"
            rules={[
              {
                required: true,
                message: i18n.formatMessage({ id: 'contact_verify_name' }),
              },
            ]}
          >
            <Input
              className={styles['field']}
              placeholder={i18n.formatMessage({
                id: 'home_contact_field_name',
              })}
            />
          </Form.Item>
          <Form.Item
            label=""
            name="email"
            rules={[
              {
                required: true,
                message: i18n.formatMessage({ id: 'contact_verify_email' }),
              },
              {
                pattern: pattern.email,
                message: i18n.formatMessage({
                  id: 'contact_verify_correct_email',
                }),
              },
            ]}
          >
            <Input
              className={styles['field']}
              placeholder={i18n.formatMessage({
                id: 'home_contact_field_email',
              })}
            />
          </Form.Item>
          <Form.Item
            label=""
            name="subject"
            // rules={[
            //   {
            //     required: true,
            //     message: '',
            //   },
            // ]}
          >
            <Input
              className={styles['field']}
              placeholder={i18n.formatMessage({
                id: 'home_contact_field_subject',
              })}
            />
          </Form.Item>
          <Form.Item
            label=""
            name="message"
            // rules={[
            //   {
            //     required: true,
            //     message: '',
            //   },
            // ]}
          >
            <TextArea
              className={`${styles['field']} ${styles['textarea']}`}
              placeholder={i18n.formatMessage({
                id: 'home_contact_field_message',
              })}
            />
          </Form.Item>
        </Form>
        <div className={styles['send']} onClick={onSubmit}>
          {i18n.formatMessage({ id: 'home_contact_send' })}
        </div>
      </div>
    </Modal>
  );
};

export default ContactMeModal;
// import { Form, Input } from 'antd'
// import { FormInstance } from 'antd/lib/form'
// import React, { forwardRef } from 'react'
// interface PropTypes {}
// const TestForm = forwardRef<FormInstance, PropTypes>((props, ref) => {
//   const [form] = Form.useForm()
//   return (
//     <Form form={form} ref={ref}>
//       <Form.Item label='' name=''>
//         <Input placeholder='请输入' />
//       </Form.Item>
//     </Form>
//   )
// })
// export default TestForm
