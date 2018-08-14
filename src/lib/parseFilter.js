/* 正则匹配式 */
const matchObj = {
  amount: /(^\d+$)|(^\d+\.{1}\d+$)/, // 正整数或正浮点数
  intPlus: /(^\d+$)/, // 正整数
  floatPlus: /(^\d+\.\d+$)/, // 正浮点数
  floatRear: /^\d+(\.\d{1,2})\d*$/, // 浮点数小数点及后面的两位数字
  amountRear: /^(\d+\.\d{1,2})\d*$/, // 正浮点数保留两位数字
  realNumber: /^((-)|(\+))*(\d+)(\.\d+)*$/, // 实数
  dateTime: /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})\s(\d{1,2}):(\d{1,2}):(\d{1,2})$/ // 字符串时间转化
}

const $filter = {
  /* 值是否匹配传递的正则表达式 */
  isMatch(match, val) {
    if (!val) {
      return null
    }
    val += ''
    return match.test(val)
  },

  /* 格式化成不四舍五入的正整数 */
  parseIntPlus(val) {
    val += ''
    if (!this.isMatch(matchObj.realNumber, val)) {
      return 0
    }

    return parseInt(val.replace(matchObj.realNumber, '$4').replace(/^0*(\d+)$/, '$1'))
  },

  /* 格式化成不四舍五入的整数 */
  parseInteger(val) {
    if (!this.isMatch(matchObj.realNumber, val)) {
      return 0
    }

    if (val + ''.indexOf('.') !== -1) {
      return parseInt(val.split('.')[0])
    }

    return parseInt(val.split('.')[0])
  },

  /* 金钱舍取 */
  parseAmount(val, unitSum, unit) {
    if (!this.isMatch(matchObj.amount, val)) {
      return '0.00' + (unit != null ? unit : '')
    }
    val = parseFloat(val)
    // 转化为保留两位小数的正浮点数
    let formatFloor = value => {
      value += ''

      if (value.indexOf('.') === -1) {
        value += '.00'
      }
      let len = unitSum || 2

      while (value.replace(/^\d+\.(\d+)$/, '$1').length < len) {
        // /^\d+\.(\d*)\d*$/
        value += '0'
      }
      return value.replace(/^(\d+\.\d{2})\d*$/, '$1')
    }

    val = formatFloor(val).replace(/^0*(\d+)$/, '$1')
    if (unit != null) {
      val = val.split('.')
      let newstr = val[0].replace(/\d{1,3}(?=(\d{3})+$)/g, function(s) {
        return s + ','
      })
      val = newstr + '.' + val[1] + unit
    }
    return val
  },

  /* 转换成JS原生日期时间(ISO) */
  parseIsoDateTime(val) {
    let date = new Date(val)
    if (!(date.getDate && date.getDate() != undefined)) {
      if (/^\d{13,}$/.test(val)) {
        date = new Date(this.parseInteger(val))
      } else if (/^\d{10,}$/.test(val)) {
        date = new Date(this.parseInteger(val) * 1000)
      } else if (date.getDate()) {
        const dateArr = matchObj.dateTime.exec(val)
        date = new Date(
          dateArr[3] + '/' + dateArr[1] + '/' + dateArr[2] + ' ' + dateArr[4] + ':' + dateArr[5] + ':' + dateArr[6]
        )
      }
    }

    return date
  },

  /* 格式化成时间戳(UTC) */
  parseDateUTC(val) {
    return Math.round(this.parseIsoDateTime(val).getTime() / 1000)
  },

  /* 格式化成时间戳(UTT) */
  parseDateUTT(val) {
    return Math.round(this.parseIsoDateTime(val).getTime())
  },

  /* 转换成年份 */
  parseDateYear(val) {
    return this.parseIsoDateTime(val).getFullYear()
  },

  /* 转换成月份 */
  parseDateMonth(val) {
    return this.parseIsoDateTime(val).getMonth() + 1
  },

  /* 转换成某天 */
  parseDateDay(val) {
    return this.parseIsoDateTime(val).getDate()
  },

  /* 转换成日期的小时 */
  parseDateHours(val) {
    return this.parseIsoDateTime(val).getHours()
  },

  /* 转换成日期的分钟 */
  parseDateMinutes(val) {
    return this.parseIsoDateTime(val).getMinutes()
  },

  /* 转换成日期的毫秒 */
  parseDateSeconds(val) {
    return this.parseIsoDateTime(val).getSeconds()
  },

  /* 格式化成日期 */
  parseDate(val) {
    let date = this.parseIsoDateTime(val)
    if (date.getDate()) {
      let [month, day] = [date.getMonth() + 1 + '', date.getDate() + '']
      if (month.length < 2) {
        month = '0' + month
      }
      if (day.length < 2) {
        day = '0' + day
      }
      return date.getFullYear() + '-' + month + '-' + day
    }
    return ''
  },

  /* 格式化成日期时间 */
  parseDateTime(val) {
    let date = this.parseIsoDateTime(val)
    if (date.getDate()) {
      return (
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate() +
        ' ' +
        date.getHours() +
        ':' +
        date.getMinutes() +
        ':' +
        date.getSeconds()
      )
    }
    return ''
  },

  /* 文本模糊 */
  parseFuzzy(val, stNum = 4, endNum) {
    if (typeof val !== 'string' || !val) return '--'
    if (endNum) {
      return val.substring(0, stNum) + '*'.repeat(endNum - stNum) + val.substring(endNum)
    }
    if (stNum >= 0) {
      return val.substring(0, stNum) + '*'.repeat(val.length - stNum)
    } else {
      return '*'.repeat(val.length + stNum) + val.substr(stNum)
    }
  },

  /* 添加后缀 */
  parseAfterAdd(val, str) {
    val += ''
    str += ''
    return val + str
  },

  /* 添加前缀 */
  parseBeforeAdd(val, str) {
    val += ''
    str += ''
    return str + val
  },

  /* 过滤比例 */
  parseScale(val) {
    return this.parseAmount(parseFloat(val * 100).toFixed(2)) + '%'
  },

  /* 格式化数字 */
  parseNum(val, count = 3) {
    val = val.toString()
    let endNum = val.length % count
    let arr = endNum ? [val.substr(0, count)] : []
    val = val.substr(endNum)
    while (val.length) {
      arr.push(val.substr(0, count))
      val = val.substr(count)
    }
    return arr.join(',')
  },
  // 千分位转化,保留小数位数
  currency(value, currency, decimals) {
    const digitsRE = /(\d{3})(?=\d)/g
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''
    currency = currency != null ? currency : '$'
    decimals = decimals != null ? decimals : 2
    let stringified = Math.abs(value).toFixed(decimals)
    let _int = decimals ? stringified.slice(0, -1 - decimals) : stringified
    let i = _int.length % 3
    let head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : ''
    let _float = decimals ? stringified.slice(-1 - decimals) : ''
    let sign = value < 0 ? '-' : ''
    return sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
  }
}

export default $filter
