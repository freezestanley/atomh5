// http 错误处理
import { message } from 'antd'
export default function (error: any) {
  const codeMap = {
    401: '暂无权限',
    403: '无资源权限',
    404: '未找到相关信息',
    500: '服务错误',
    503: '服务错误',
    504: '服务错误',
  }
  if (error.response) {
    message.error(
      `${codeMap[error.response.status]} url : ${error.response.url}`
    )
  } else {
    // 请求初始化时出错或者没有响应返回的异常
    message.error('未知异常')
  }

  // throw error // 如果throw. 错误将继续抛出.

  // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
  // return {some: 'data'};
}
