!(function (e) {
  let t
  let n
  let o
  let i
  let d
  let c
  let l =
    '<svg><symbol id="icon-arrowleft" viewBox="0 0 1024 1024"><path d="M458.467 514.086l244.026-239.854-73-75.085-317.719 312.158 321.891 313.548 78.56-77.17z" fill="" ></path></symbol></svg>'
  var a = (a = document.getElementsByTagName('script'))[
    a.length - 1
  ].getAttribute('data-injectcss')
  if (a && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      )
    } catch (e) {
      console && console.log(e)
    }
  }
  function s() {
    d || ((d = !0), o())
  }
  ; (t = function () {
    let e
    let t
    let n
    let o
      ; ((o = document.createElement('div')).innerHTML = l),
        (l = null),
        (n = o.getElementsByTagName('svg')[0]) &&
        (n.setAttribute('aria-hidden', 'true'),
          (n.style.position = 'absolute'),
          (n.style.width = 0),
          (n.style.height = 0),
          (n.style.overflow = 'hidden'),
          (e = n),
          (t = document.body).firstChild
            ? ((o = e), (n = t.firstChild).parentNode.insertBefore(o, n))
            : t.appendChild(e))
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
          document.removeEventListener('DOMContentLoaded', n, !1), t()
        }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
      ((o = t),
        (i = e.document),
        (d = !1),
        (c = function () {
          try {
            i.documentElement.doScroll('left')
          } catch (e) {
            return void setTimeout(c, 50)
          }
          s()
        })(),
        (i.onreadystatechange = function () {
          i.readyState == 'complete' && ((i.onreadystatechange = null), s())
        }))
})(window)