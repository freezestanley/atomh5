const intOrFloat = /^[0-9]+([.]?[0-9]+){0,1}$/ // 整数或小数
const intOrFloatFix2 = /^[0-9]+([.]?[0-9]{0,2}){0,1}$/ // 整数或小数,小数后两位
const minusIntOrFloat = /^-?[0-9]+([.]?[0-9]+){0,1}$/ // 负整数或小数
const int = /^[0-9]+$/ // 正整数
const minusInt = /^-?[0-9]+$/ // 负整数
const ranger2to50 = /^[2-9]$|^[0-4][0-9]$|^50$/gi // 限制 2-50
const intLen2 = /^[0-9]{1,2}$/ // 两位整数
const hourMinFormatter = /^[0-1]\d|2[0-3]([:]{1}[0-5]{1}[0-9]{1}){0,1}$/ // 时间格式 00:00 ~ 23:59
const hourRange = /(^[0-9]$)|(^[0-1]\d|2[0-3])$/ // 小时格式
const minRange = /(^[0-9]$)|(^[0-5]{1}[0-9]{1}$)/ // 分钟格式
const url = /^https?:\/\/.*$/i // 地址
// const url = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i; // 地址
const version = /^\d+\.\d+\.\d+$/ // 版本
const ip = /((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))/
const isNull = /\r|\n|\s/ // 匹配有空字符 空格 回车 换行
const isnNull = /^[\w|\&|\*|\$|\%|\#|\@|\!|\(|\)|\~|\{|\}|\[|\]|\^]*$/ // 匹配非空字符 空格 回车 换行
const tel = /0\d{2,3}-\d{7,8}(|([-\u8f6c]{1}\d{1,5}))$/ // 电话/传真号码 021-xxx
const phone = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/ // 手机号码
const idCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/ // 身份证
const wechatOAId = /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/
const wechatId = /^[a-zA-Z0-9][a-zA-Z0-9_-]{5,19}$/
const cost = /^[0-9]\d{0,6}(\.\d{0,2})?$/ // 最多支持带两位小数的七位正整数
const tax = /^[A-Za-z0-9]+$/ // 纳税人识别号
const outerUrl = /(((https?:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
const bankCardNo = /^\d{8,25}$/ // 银行卡号
const businessCode = /^[a-zA-Z0-9]{10,20}$/ // 营业代码
const email = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ // 邮箱
const noSymbol = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/
const enOrNum = /^[a-zA-Z0-9]+$/ // 字母或数字
export default {
  intOrFloat,
  intOrFloatFix2,
  minusIntOrFloat,
  int,
  minusInt,
  intLen2,
  hourMinFormatter,
  hourRange,
  minRange,
  url,
  version,
  ip,
  isNull,
  isnNull,
  tel,
  idCard,
  phone,
  wechatOAId,
  ranger2to50,
  cost,
  wechatId,
  outerUrl,
  tax,
  bankCardNo,
  businessCode,
  email,
  noSymbol,
  enOrNum,
}
