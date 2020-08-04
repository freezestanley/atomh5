import { useState } from 'react'
import { UploadProps, UploadChangeParam } from 'antd/es/upload'
import { message } from 'antd'
import { uploadFileUrl } from '@/api'
interface ParamsTypes {
  uploadProps?: UploadProps
  // 暴露上传成功回调，便于调用
  onSuccess?: (
    res: UploadChangeParam['file']['response'],
    file: UploadChangeParam['file'],
    fileList?: UploadChangeParam['fileList']
  ) => void
  onError?: (
    file: UploadChangeParam['file'],
    fileList?: UploadChangeParam['fileList']
  ) => void
}
export default function useAntdUpload(params?: ParamsTypes) {
  const [uploadProps, setUploadProps] = useState<UploadProps>({
    action: uploadFileUrl,
    name: 'multipartFile',
    accept: '.xlsx,.csv',
    showUploadList: false,
    beforeUpload: ({ size }) => {
      const isLt5M = size / 1024 / 1024 < 5
      if (!isLt5M) {
        message.error('文件不可大于5M')
      }
      return isLt5M
    },
    withCredentials: false,
    onChange({ file, fileList }) {
      // if (info.file.status !== 'uploading') {
      //   console.log(info.file, info.fileList);
      // }
      if (file.status === 'done') {
        params?.onSuccess && params?.onSuccess(file.response, file, fileList)
      } else if (file.status === 'error') {
        if (params?.onError) {
          params?.onError(file, fileList)
          return
        }
        onFileError(file, fileList)
      }
    },
    ...params?.uploadProps,
  })
  /**
   * @description 默认处理
   * @param file
   * @param fileList
   */
  function onFileError(
    file: UploadChangeParam['file'],
    fileList: UploadChangeParam['fileList']
  ) {
    message.error(`${file.name} 上传失败`)
  }
  /**
   * @description 校验upload组件的方法,绑定到Form.Item上
   * <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
   * @param e
   */
  function normFile(e) {
    if (Array.isArray(e)) {
      return e
    }

    return e && e.fileList
  }
  return {
    uploadProps,
    normFile,
  }
}
