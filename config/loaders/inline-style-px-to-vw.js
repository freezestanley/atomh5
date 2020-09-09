const loaderUtils = require('loader-utils')
const inlinePxReg = /[0-9]+px/g

function InlineStylePxToVw(source) {
	const options = loaderUtils.getOptions(this)
	const viewportWidth = (options && options.viewportWidth) || 375
	if (source.match(inlinePxReg)) {
		source = source.replace(inlinePxReg, px => {
			let vw = accDiv(parseInt(px.split('px')[0]), accDiv(viewportWidth, 100)) //vw = width / (viewportWidth/100)
			return vw + 'vw'
		})
	}

	return source
}
//精确除法
function accDiv(arg1, arg2) {
	var t1 = 0,
		t2 = 0,
		r1,
		r2
	try {
		t1 = arg1.toString().split('.')[1].length
	} catch (e) {}
	try {
		t2 = arg2.toString().split('.')[1].length
	} catch (e) {}
	with (Math) {
		r1 = Number(arg1.toString().replace('.', ''))
		r2 = Number(arg2.toString().replace('.', ''))
		return (r1 / r2) * pow(10, t2 - t1)
	}
}

module.exports = InlineStylePxToVw
