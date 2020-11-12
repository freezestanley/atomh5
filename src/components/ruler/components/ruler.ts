export interface RulerTypes {
  // 容器id
  el: string
  // 刻度尺高度
  height?: number
  // 最大刻度
  maxScale?: number
  // 开始的值
  startValue?: number
  // 区间
  region: number[]
  // 刻度尺背景颜色
  background?: string
  // 刻度线和字体的颜色
  color?: string
  // 中心刻度标记颜色
  markColor?: string
  // 是否不断地获取值 Boolean 区别是松开屏幕执行success回调还是滑动过程就执行success回调
  isConstant?: boolean
  // 可视窗口下展示多少格的刻度
  division?: number
  // 成功回调
  success?: (res: number) => void
}

export default function initPlugin(params: RulerTypes) {
  const initParams: RulerTypes = {
    el: params.el,
    height: params.height || 60,
    maxScale: params.maxScale || 200,
    startValue: params.startValue || 0,
    region: params.region || [0, 300],
    background: params.background || '#fff',
    color: params.color || '#666',
    markColor: params.markColor || '#FFCC33',
    isConstant: params.isConstant || false,
    division: params.division || 50,
  }

  if (!initParams.el) {
    console.warn('没有容器元素的参数')
    return false
  }

  const rulerWrap = document.getElementById(initParams.el) // 获取容器
  rulerWrap.style.height =
    initParams.height < 50 ? `${50}px` : `${initParams.height}px`

  // 最大刻度的小值是50
  initParams.maxScale = initParams.maxScale < 50 ? 50 : initParams.maxScale

  if (initParams.startValue > initParams.maxScale) {
    initParams.startValue = initParams.maxScale
  }

  let minSildeNum = 0 // 最小滑动的值
  let maxSildeNum = initParams.maxScale // 最大滑动的值

  if (initParams.region) {
    minSildeNum = Math.floor(initParams.region[0])
    maxSildeNum = Math.floor(initParams.region[1])
  }

  let count = initParams.startValue // 初始值

  const winWidth = rulerWrap.offsetWidth // 容器宽度
  const division = winWidth / initParams.division // 每个刻度的距离 分割线
  // 刻度值数组
  const scaleValueList = []
  for (let i = initParams.region[0]; i <= initParams.maxScale; i += 5) {
    scaleValueList.push(i)
  }

  let canvas = rulerWrap.getElementsByTagName('canvas')[0] // 获取容器下的canvas标签
  // 没有canvas就创建一个
  if (!canvas) {
    canvas = document.createElement('canvas') // 创建canvas标签
    canvas.width = winWidth
    canvas.height = initParams.height
    rulerWrap.appendChild(canvas)
  }
  const cxt = canvas.getContext('2d')

  if (window.devicePixelRatio) {
    canvas.width = window.devicePixelRatio * winWidth
    canvas.height = window.devicePixelRatio * initParams.height
    cxt.scale(window.devicePixelRatio, window.devicePixelRatio)
  }

  // 画刻度尺
  function drawRuler(_count) {
    _count -= initParams.division / 2

    // 清空画布
    cxt.clearRect(0, 0, winWidth, initParams.height)

    // 刻度尺背景
    if (initParams.background) {
      cxt.fillStyle = initParams.background
      cxt.fillRect(0, 0, canvas.width, initParams.height)
    }

    // 画基线
    cxt.beginPath()
    cxt.save()
    cxt.strokeStyle = '#f0f0f0'
    cxt.lineWidth = 5
    cxt.lineCap = 'round'
    cxt.moveTo(3, 24)
    cxt.lineTo(winWidth - 3, 24)
    cxt.stroke()

    // 画刻度线
    for (let i = minSildeNum; i < initParams.maxScale; i++) {
      cxt.beginPath()
      cxt.save()
      cxt.strokeStyle = '#f0f0f0'
      cxt.lineWidth = 1
      cxt.lineCap = 'round'

      if (i % 5 !== 0 && i % 10 !== 0) {
        cxt.strokeStyle = '#f0f0f0'
        cxt.moveTo(division * i - _count * division, 10)
        cxt.lineTo(
          division * i - _count * division,
          Math.floor(initParams.height * 0.34)
        )
      }

      if (i % 5 === 0) {
        cxt.strokeStyle = '#f0f0f0'
        cxt.moveTo(division * i - _count * division, 5)
        cxt.lineTo(
          division * i - _count * division,
          Math.floor(initParams.height * 0.38)
        )
      }

      cxt.stroke()
      cxt.restore()
      cxt.closePath()
    }

    // 添加体重数字
    cxt.beginPath()
    cxt.font = 'Light 12px Arial'
    cxt.fillStyle = '#666'
    cxt.textAlign = 'center'
    cxt.textBaseline = 'middle'
    scaleValueList.forEach((num, i) => {
      cxt.fillText(
        num.toString(),
        division * i * 5 - _count * division + division * minSildeNum,
        Math.floor(initParams.height * 0.78) + 5
      )
    })
    cxt.closePath()

    // 中心刻度线
    cxt.beginPath()
    cxt.save()
    cxt.strokeStyle = initParams.markColor
    cxt.lineWidth = 1
    cxt.lineCap = 'round'
    cxt.moveTo(winWidth / 2, 0)
    cxt.lineTo(winWidth / 2, Math.floor(initParams.height * 0.52))
    cxt.stroke()
    cxt.restore()
    cxt.closePath()
    cxt.beginPath()
    cxt.save()
    cxt.arc(
      winWidth / 2,
      Math.floor(initParams.height * 0.52),
      10,
      0,
      Math.PI * 2,
      false
    )
    // 阴影的x偏移
    cxt.shadowOffsetX = 2
    // 阴影的y偏移
    cxt.shadowOffsetY = 4
    // 阴影颜色
    cxt.shadowColor = 'rgba(212,228,255,1)'
    // 阴影的模糊半径
    cxt.shadowBlur = 4
    cxt.fillStyle = '#fff'
    cxt.fill()
    cxt.restore()
    cxt.closePath()
  }

  if (window.devicePixelRatio) {
    canvas.style.transform = `scale(${1 / window.devicePixelRatio})`
    canvas.style.transformOrigin = 'left top'
  }
  drawRuler(count)

  // 滑动相关
  let initX = 0 // 初始x 距离
  let endX = 0 // 结束x 距离
  let distanceX = 0 // 移动距离
  let _distanceX = 0 // 判断用的移动距离
  let lastX = count // 上次移动距离

  if (!canvas) return false

  // 手指&鼠标移动事件
  const moveEvent = () => {
    distanceX = Math.floor((endX - initX) / (winWidth / initParams.division))
    if (distanceX === _distanceX) {
      return false
    }
    _distanceX = distanceX
    count = lastX - distanceX

    if (
      count >= initParams.maxScale ||
      count <= Math.floor(initParams.region[0])
    ) {
      count =
        count >= initParams.maxScale
          ? initParams.maxScale
          : Math.floor(initParams.region[0])
    }

    drawRuler(count)

    if (initParams.isConstant) {
      params.success && params.success(count)
    }
  }

  // 手指&鼠标结束事件
  const overEvent = () => {
    if (count > maxSildeNum) {
      lastX = count = count > maxSildeNum ? maxSildeNum : count
    } else if (count < minSildeNum) {
      lastX = count = count < minSildeNum ? minSildeNum : count
    }
    drawRuler(count)

    // 返回最后的值
    params.success && params.success(count)
  }

  // 手指按下
  canvas.addEventListener(
    'touchstart',
    e => {
      initX = e.targetTouches[0].pageX
    },
    false
  )

  // 手指滑动
  canvas.addEventListener(
    'touchmove',
    e => {
      endX = e.targetTouches[0].pageX
      moveEvent()
      e.preventDefault()
    },
    false
  )

  // 手指抬起
  canvas.addEventListener(
    'touchend',
    () => {
      lastX = count
      overEvent()
    },
    false
  )

  let isMouseDown = false // 鼠标是否按下

  // 鼠标按下
  canvas.addEventListener(
    'mousedown',
    (e: any) => {
      isMouseDown = true
      initX = e.layerX
    },
    false
  )

  // 鼠标移动
  canvas.addEventListener(
    'mousemove',
    (e: any) => {
      if (!isMouseDown) {
        return false
      }
      endX = e.layerX
      moveEvent()
    },
    false
  )

  // 鼠标抬起&离开
  canvas.addEventListener(
    'mouseup',
    () => {
      lastX = count
      isMouseDown = false
      overEvent()
    },
    false
  )

  canvas.addEventListener(
    'mouseleave',
    () => {
      if (isMouseDown) {
        lastX = count
        isMouseDown = false
        overEvent()
      }
    },
    false
  )
}
