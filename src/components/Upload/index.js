/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import { Icon as LegacyIcon } from '@ant-design/compatible';
import { Upload, message } from 'antd';
import styles from './index.less';

const headers = {
  'x-anlink-username': 'zhangsan',
  'x-anlink-userid': 10534,
  'x-anlink-parentid': 10534,
};
class UpLoader extends Component {
  state = {
    imageUrl: this.props.imageUrl,
    loading: false,
    actionUrl: '',
  };

  handleChange = info => {
    const { status, response } = info.file;
    const { onChange, scan } = this.props;

    if (status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (status === 'done') {
      if (response.code === '0000') {
        scan ? onChange(response.data) : onChange(response.data.fileUrl);
        this.setState({
          imageUrl: scan ? response.data.imagePath : response.data.fileUrl,
          loading: false,
        });
        this.props.onChange && this.props.onChange(response.data.fileUrl)
      } else {
        this.setState({
          loading: false,
        });
      }
    }
  };

  beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
    if (!isJpgOrPng) {
      message.error('只能上传jpg/png/jpeg格式');
    }
    const isLt4M = file.size / 1024 / 1024 <= 4;
    if (!isLt4M) {
      message.error('图片大小要小于4MB');
    }
    return isJpgOrPng && isLt4M;
  }

  render() {
    const { imageUrl } = this.state;
    let { actionUrl } = this.state;
    const { width, height, tips, scan } = this.props;
    scan ? (actionUrl = `${actionUrl}/ocr/scanIdCard`) : (actionUrl = `${actionUrl}/file/upload`);

    return (
      <div className={styles['uploader-wrap']}>
        <Upload
          beforeUpload={this.beforeUpload}
          showUploadList={false}
          headers={headers}
          action={actionUrl}
          onChange={this.handleChange}
          disabled={this.props.disabled}
        >
          <div className={styles['uploader-btn']} style={{ width, height }}>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{ width: '100%', height: '100%', borderRadius: 10 }}
              />
            ) : (
              <div className={styles['icon-group']}>
                <LegacyIcon type={this.state.loading ? 'loading' : 'plus'} />

                <div style={{ width }} className={styles['uploader-tips']}>
                  {tips}
                </div>
              </div>

            )}
          </div>
        </Upload>

      </div>
    );
  }
}

export default UpLoader;
