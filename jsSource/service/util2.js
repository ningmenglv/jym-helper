export var UTIL;
(function (UTIL) {
    var DeviceJudge = /** @class */ (function () {
        function DeviceJudge() {
        }
        DeviceJudge.isM = function () {
            return /Android|iPhone|iPod|Mobile/i.test(window.navigator.userAgent);
        };
        return DeviceJudge;
    }());
    UTIL.DeviceJudge = DeviceJudge;
    var Time = /** @class */ (function () {
        function Time() {
        }
        Time.pareseTime = function (orderTime, isNeedTime) {
            // 转换时间日期
            if (void 0 === orderTime || orderTime === null)
                return '--';
            if (isNeedTime) {
                return orderTime.replace(/(\d{2})\/(\d{2})\/(\d{4})(\s.+)/, function ($0, $1, $2, $3, $4) { return $3 + '-' + $1 + '-' + $2 + $4; });
            }
            else {
                return orderTime.replace(/^(\d{2})\/(\d{2})\/(\d{4}).+$/g, function ($0, $1, $2, $3) { return $3 + '-' + $1 + '-' + $2; });
            }
        };
        return Time;
    }());
    UTIL.Time = Time;
    var Url = /** @class */ (function () {
        function Url() {
        }
        /**
         * 获取url内search中指定参数或整个参数对象
         * 不传name获取整个参数对象 || 不传urlParam获取当前地址参数串
         * exp: /html/platform/information.html?guild=333 => 333 || {guild: 333}
         * @param {string} name 参数名
         * @param {string} urlParam 参数串
         */
        Url.getUrlParam = function (_a) {
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
        return Url;
    }());
    UTIL.Url = Url;
    var Money = /** @class */ (function () {
        function Money() {
        }
        /**
         * 处理金额,保留小数点后几位(默认:2)并每3位分割 1234567.5555 => 1,234,567.55
         * @method parseAmount
         * @param  {String}    val     [数值]
         * @param  {Number}    unitSum [保留位数]
         * @return {String}            [返回处理后的金额]
         */
        Money.parseAmount = function (val, unitSum) {
            // 字符串 => 数值
            val = parseFloat(val);
            // 转化为保留两位小数的正浮点数
            var formatFloor = function (value) {
                var len = unitSum || 2;
                var reg = new RegExp('^(\\-?\\d+\\.\\d{' + len + '})\\d*$');
                value += '';
                if (value.indexOf('.') === -1)
                    return value; //  + '.00'
                return (value + '0'.repeat(len)).replace(reg, '$1');
            };
            val = formatFloor(val).replace(/^0*(\d+)$/, '$1');
            val = val.split('.');
            var newstr = UTIL.Tools.splitNumb(val[0]);
            val = newstr + (val[1] ? '.' + val[1] : '');
            return val;
        };
        return Money;
    }());
    UTIL.Money = Money;
    var Tools = /** @class */ (function () {
        function Tools() {
        }
        // 分割数字 12345 => 12,345
        Tools.splitNumb = function (val) {
            val = '' + val;
            return val.replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) { return s + ','; });
        };
        return Tools;
    }());
    UTIL.Tools = Tools;
})(UTIL || (UTIL = {}));
//# sourceMappingURL=util2.js.map