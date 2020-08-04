interface DICTCodeReq {
  code: string
}
interface DICTCodesReq {
  // list: string[]
  idList: string
}
interface UploadResType {
  // 通用上传响应
  ossUrl: string // oss绝对路径
  objectKey: string
}
