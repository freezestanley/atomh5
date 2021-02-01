declare module 'slash2'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module 'mockjs'
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>
  ): React.ReactElement
  const url: string
  export default url
}
declare module 'omit.js'
declare var REACT_APP_ENV: string
// google analytics interface
interface GAFieldsObject {
  eventCategory: string
  eventAction: string
  eventLabel?: string
  eventValue?: number
  nonInteraction?: boolean
}
interface Window {
  ga: (
    command: 'send',
    hitType: 'event' | 'pageview',
    fieldsObject: GAFieldsObject | string
  ) => void
  reloadAuthorized: () => void
}
interface ResType<T = null> {
  code: number
  data: T
  msg: string
}
interface PageTypes {
  offset?: number
  limit?: number
}
declare let ga: Function

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false
