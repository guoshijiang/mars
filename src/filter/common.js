/**
 *功能过滤器
 */
export default {
  /**
   * 处理时间格式化的过滤器 YY-MM-DD HH:mm:ss
   * @param {*} data
   * @param {*} type
   */
  dateTime(data) { 
    if (data) {
      if (typeof(data) == 'string') data = parseInt(data)
      var d = new Date(data)
      var year = d.getFullYear()
      var month = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
      var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
      var hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
      var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
      var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
      return `${year}-${month}-${day} ${hour}:${minutes}`
    } else {
      return '当前暂无时间'
    }
  },
  /**
   * 处理时间格式化的过滤器  HH:mm:ss
   * @param {*} data
   * @param {*} type
   */
  dateSeconds(data) { 
    if (data) {
      if (typeof(data) == 'Number') data = parseInt(data)
      // var d = data;
      // var hour = Math.floor(d/3600) < 10 ? '0' + Math.floor(d/3600) : Math.floor(d/3600);
      // var minutes = Math.floor(d%3600/60) < 10 ? '0' + Math.floor(d%3600/60) : Math.floor(d%3600/60);
      // var seconds = d%60 < 10 ? '0' + d%60 : d%60;
      var t = new Date(57600000 + data*1000).toTimeString().split(' ')[0];
      return  t ;//`${hour}:${minutes}:${seconds}`
    } else {
      return '当前暂无时间'
    }
  },
  initdateByMoment (ts){
    let now = new Date().getTime()
    let miao1 = 1000 * 1
    let fen1 = miao1 * 60
    let xiaoshi1 = fen1 * 60
    let day = xiaoshi1 * 24

    let differ = now - new Date(ts)

    if (differ < fen1) {
        ts = differ / miao1
        ts = Math.ceil(ts) + '秒前'
    } else if (differ < xiaoshi1) {
        ts = differ / fen1
        ts = Math.ceil(ts) + '分钟前'
    } else if (differ < day) {
        ts = differ / xiaoshi1
        ts = Math.ceil(ts) + '小时前'
    } else {
        // ts = factory.initdate(ts).date_en
    }

    return ts
  },
  /**
   * 提币类型
   * @param {*} data
   * 
   */
  transType(data) { 
    if (typeof(data) == 'number') {
      // if (typeof(data) != 'number') return '错误类型'
      // var d = data;
      var type = {
        0:'普通充币',
        1:'普通提币',
        3:'快速充币',
        4:'快速提币',
        5:'全部',
      }
      return type[data]
    } else {
      return '错误类型'
    }
  },
  /**
   * 提币状态
   * @param {*} data
   * 
   */
  transStatus(data) { 
    if (typeof(data) == 'number') {
      var type = {
        0:'待审核',
        1:'处理中',
        2:'已完成',
      }
      return type[data]
    } else {
      return '错误类型'
    }
  },

  /** 正整数 */
  Integer (num) {
    try {
      return num ? num.toFixed() : 0
    } catch (e) {
      return 0
    }
  },
  
  /* 秒转为分钟，分钟转为小时 */
  time60 (num) {
    try {
      return num ? Math.ceil(num / 60) : 0
    } catch (e) {
      return 0
    }
  },
  
  /* 转换成价格 1,265.00 */
  money (num, decnum) {
    try {
		let float = parseFloat(num || 0)
		if (Number.isNaN(float)) return num

		decnum = decnum < 0 ? 2 : decnum
		return float.toFixed(decnum).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,");
    } catch (e) {
      	return '0.00'
    }
  },
  /**
	 * 四舍六入五成双
	 * @param num 需转化的数字
	 * @param digit 保留小数位数, 默认保留2位小数
	 *
	 * example
	 *    const a = 0.2;
	 *    const b = 0.1;
	 *    round(a.add(b)); // 勿用 a + b,会存在精度问题
	 * @returns {number}
	 */
	toRound (num , digit ) {
		const ratio   = Math.pow(10, digit ||  2),
			  _num    = num * ratio,
			  mod     = _num % 1,
			  integer = Math.floor(_num);
		if (mod > 0.5) {
			return (integer + 1) / ratio;
		} else if (mod < 0.5) {
			return integer / ratio;
		} else {
			return (integer % 2 === 0 ? integer : integer + 1) / ratio;
		}
	},
}
