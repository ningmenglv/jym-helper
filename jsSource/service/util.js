import { Page } from '@/constant';
/*
 *判断是手机端还是pc端
 */
export var isMobile = function () {
    var regex = /Android|iPhone|iPod|Mobile/i;
    return regex.test(window.navigator.userAgent);
};
/**
 * 生成16位随机字符串
 */
export var newGuid = function () {
    var _a = ['', ''], guid = _a[0], n = _a[1];
    for (var i = 1; i <= 32; i++) {
        n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
    }
    return guid;
};
/**
 * 获取url内search中指定参数或整个参数对象
 * 不传name获取整个参数对象 || 不传urlParam获取当前地址参数串
 * @param {string} name 参数名
 * @param {string} urlParam 参数串
 */
export var getUrlParam = function (_a) {
    var name = _a.name, urlParam = _a.urlParam;
    urlParam = (urlParam || window.location.search).replace(/^\?*(.)/, '$1');
    var urlParamArray = urlParam.split('&');
    var paramObject = {};
    urlParamArray.forEach(function (item) {
        var paramArray = item.split('=');
        if (item.indexOf('=') !== -1) {
            paramObject[paramArray[0]] = paramArray[1];
        }
    });
    return name ? paramObject[name] || '' : paramObject;
};
/**
 * 转换编码(cookie专用)
 * @param {string} val
 */
export var parseDecode = function (val) {
    return encodeURIComponent(JSON.stringify(val)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
};
/**
 * 转化成金额形式的字符串
 * @param {any} val 要转换的值
 * @param {number} bit 小数点保留位数
 */
export function parseMoneyString(val, bit) {
    bit = bit === 0 ? 0 : 2;
    val = Number.parseFloat(val);
    val = Number.isFinite(val) ? val : ~~val;
    var isNegative = val < 0;
    val = ("" + val).replace(/^-?(\d+(\.\d+)?\d*)/, '$1');
    var matchStr = val.match(new RegExp("^(\\d+)(\\.\\d{0," + bit + "})?\\d*$"));
    var strArr = matchStr[1].split('').reverse();
    for (var i = 3, len = strArr.length; i < len; i += 3) {
        strArr[i] += ',';
    }
    val = "" + strArr.reverse().join('') + (matchStr[2] || '');
    val =
        bit === 0 || val.includes('.')
            ? val.padEnd(val.length + bit, '0'.repeat(bit))
            : val.padEnd(val.length + bit + 1, '0'.repeat(bit).padStart(bit + 1, '.'));
    val = val.replace(new RegExp("((\\d+,?)+(\\.\\d{0," + bit + "})?)\\d*$"), '$1');
    return isNegative ? val.padStart(val.length + 1, '-') : val;
}
export var goLogin = function () {
    if (window.historys.location.pathname !== '/login') {
        window.historys.push(Page.path.LOGIN + "?returnUrl=" + window.encodeURIComponent(window.historys.location.pathname + window.historys.location.search));
    }
};
export var getStyle = function (element, attr) {
    if (element.currentStyle) {
        return element.currentStyle[attr];
    }
    else {
        return window.getComputedStyle(element, null)[attr];
    }
};
/**
 * 数值取整
 * @param {string,number} val 数值
 */
export function parseTrunc(val) {
    return Math.abs(Math.trunc(Number(val)));
}
/**
 * 格式化时间
 * @param {date,number,string} val 时间值|时间戳|时间字符串
 * @param {string} format 格式化结构
 */
export function parseDateString(val, format) {
    var date = parseDate(val);
    var obj = {
        'Y+': date.getFullYear(),
        'M+': String(date.getMonth() + 1).padStart(2, '0'),
        'd+': String(date.getDate()).padStart(2, '0'),
        'h+': String(date.getHours()).padStart(2, '0'),
        'm+': String(date.getMinutes()).padStart(2, '0'),
        's+': String(date.getSeconds()).padStart(2, '0')
    };
    date = format || 'YYYY-MM-dd';
    for (var key in obj) {
        date = date.replace(new RegExp("(" + key + ")", 'g'), obj[key]);
    }
    return isEmpty(val) ? '' : date;
}
/**
 * 转化成日期时间
 * @param {number,string} val UTC时间戳|时间字符串
 */
export function parseDate(val) {
    if (typeof val === 'string') {
        if (/[^0-9]/.test(val)) {
            return new Date(val.replace('-', '/'));
        }
        return new Date(val * 1000);
    }
    if (typeof val === 'number') {
        return new Date(val * 1000);
    }
    return val;
}
/**
 * 转化成UTC时间戳
 * @param {date,string} val 时间值|时间戳|时间字符串
 */
export function parseTimeStamp(val) {
    return Math.round(parseDate(val).getTime() / 1000);
}
/**
 * 对比时间的差值
 * @param {date,number,string} val1 时间值
 * @param {date} val2 时间值
 * @param {string} key 对比的时间项(非必填) ['year', 'month', 'day', 'hour', 'minute', 'second']
 * @returns {number,object}
 */
export function diffDate(val1, val2, key) {
    val1 = parseDate(val1);
    val2 = parseDate(val2);
    var dateArr = [
        [val1.getFullYear(), val2.getFullYear()],
        [val1.getMonth(), val2.getMonth()],
        [val1.getDate(), val2.getDate()],
        [val1.getHours(), val2.getHours()],
        [val1.getMinutes(), val2.getMinutes()],
        [val1.getSeconds(), val2.getSeconds()]
    ];
    var keyArr = ['year', 'month', 'day', 'hour', 'minute', 'second'];
    // 转换成正数
    var parseDiffPositiveNumber = function (v1, v2) {
        return v1 - v2 >= 0 ? v1 - v2 : 0;
    };
    if (isEmpty(key)) {
        var obj = {};
        for (var i = 0, len = dateArr.length; i < len; i++) {
            obj[keyArr[i]] = parseDiffPositiveNumber(dateArr[i][0], dateArr[i][1]);
        }
        return obj;
    }
    var index = keyArr.indexOf(key);
    return parseDiffPositiveNumber(dateArr[index][0], dateArr[index][1]);
}
/**
 * 根据UTC数值计算时间成员值
 * @param {number} val
 */
export function computeDate(val) {
    var memberArr = [86400, 3600, 60, 1];
    var keyArr = ['day', 'hour', 'minute', 'second'];
    var obj = {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
    };
    for (var i = 0, len = memberArr.length; i < len; i++) {
        var num = parseTrunc(val / memberArr[i]);
        obj[keyArr[i]] = num;
        val -= num * memberArr[i];
    }
    return obj;
}
// 判断是否为空
export function isEmpty(val) {
    return val === undefined || val === null || val === '';
}
// 判断是否为字符串
export function isString(val) {
    return typeof val === 'string';
}
// 判断是否为数值
export function isNumber(val) {
    return typeof val === 'number';
}
// 判断是否为数组
export function isArray(val) {
    return typeof val === 'object' && val.constructor === Array;
}
// 判断是否为日期时间
export function isDate(val) {
    return typeof val === 'object' && val.constructor === Date;
}
// 判断是否为正确的日期时间
export function isValidDate(val) {
    var isValid = isDate(val);
    try {
        isValid && new Date(val).getDate();
    }
    catch (e) {
        isValid = false;
    }
    return isValid;
}
// 判断是否为正则表达式
export function isRegExp(val) {
    return typeof val === 'object' && val.constructor === RegExp;
}
// 判断是否为对象
export function isObject(val) {
    return typeof val === 'object' && val.constructor === Object;
}
// 判断是否为dom对象
export function isElement(val) {
    return typeof val === 'object' && val.nodeType > 0;
}
// 判断是否为文本dom对象
export function isElementText(val) {
    return isElement(val) && val.nodeType === 3;
}
// 判断是否为国内手机号
export function isTel(val) {
    return /^1(3|4|5|6|7|8|9)\d{9}$/.test(String(val));
}
// 判断是否为邮箱
export function isMail(val) {
    return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(String(val));
}
// 判断是否为身份证
export function isId(val) {
    return /^\d{17}(\d|x)|\d{15}/.test(String(val));
}
//# sourceMappingURL=util.js.map