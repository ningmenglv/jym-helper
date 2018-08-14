var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
// import ReactEcharts from "echarts-for-react";
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import './style-pc.less';
var Organization_PC = /** @class */ (function (_super) {
    __extends(Organization_PC, _super);
    function Organization_PC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Organization_PC.prototype.render = function () {
        var _a = this.props, industryInfo = _a.industryInfo, leaderList = _a.leaderList, employeeChart = _a.employeeChart;
        return (React.createElement("div", { id: "organization-pc", className: "page-pc" },
            React.createElement("section", { className: "section section-intro" },
                React.createElement("h2", { className: "title" }, "\u91D1\u94F6\u732B\u4ECB\u7ECD"),
                React.createElement("div", { className: "intro" },
                    React.createElement("p", null, "\u91D1\u94F6\u732B\uFF08\u5168\u79F0\u4E3A\u201C\u4E0A\u6D77\u91D1\u94F6\u732B\u91D1\u878D\u670D\u52A1\u6709\u9650\u516C\u53F8\u201D\uFF09\u6210\u7ACB\u4E8E2013\u5E749\u6708\uFF0C\u662F\u4E00\u5BB6\u4E13\u4E1A\u7684\u7F51\u7EDC\u501F\u8D37\u4FE1\u606F\u4E2D\u4ECB\u5E73\u53F0\uFF0C\u81F4\u529B\u4E8E\u4E3A\u6709\u878D\u8D44\u9700\u6C42\u7684\u4E2D\u5C0F\u4F01\u4E1A\u63D0\u4F9B\u9AD8\u6548\u3001\u4FBF\u6377\u7684\u4E92\u8054\u7F51\u91D1\u878D\u670D\u52A1\uFF0C\u540C\u65F6\u4E3A\u5E7F\u5927\u6295\u8D44\u8005\u63D0\u4F9B\u7A33\u5065\u7684\u4E00\u7AD9\u5F0F\u7406\u8D22\u670D\u52A1\u3002"),
                    React.createElement("p", null, "\u91D1\u94F6\u732B\u4E8E2013\u5E7411\u6708\u6B63\u5F0F\u4E0A\u7EBF\u7B2C\u4E00\u6B3E\u7968\u636E\u7406\u8D22\u4EA7\u54C1\uFF0C\u5F00\u521B\u4E86\u4F20\u7EDF\u7968\u636E\u8D44\u4EA7\u7EBF\u4E0A\u9500\u552E\uFF08O2O\u6A21\u5F0F\uFF09\u7684\u5148\u6CB3\uFF0C\u6210\u4E3A\u6211\u56FD\u4E92\u8054\u7F51\u7968\u636E\u7F51\u8D37\u670D\u52A1\u884C\u4E1A\u7684\u5148\u950B\u3002\u6210\u7ACB\u56DB\u5E74\u6765\uFF0C\u5E73\u53F0\u59CB\u7EC8\u4E13\u6CE8\u4E8E\u4F18\u8D28\u7684\u7968\u636E\u8D44\u4EA7\uFF0C\u62E5\u6709\u4E25\u82DB\u7684\u98CE\u63A7\u4F53\u7CFB\uFF0C\u5E76\u4E8E2017\u5E74\u83B7\u5F97\u8D44\u672C\u9752\u7750\uFF0C\u6210\u4E3A\u4E92\u8054\u7F51\u91D1\u878D\u9886\u57DF\u201C\u592E\u4F01\u56FD\u8D44\u7CFB\u201D\u5E73\u53F0\u4E4B\u4E00\u3002\u622A\u6B62\u76EE\u524D\uFF0C\u91D1\u94F6\u732B\u5148\u540E\u8363\u83B7ISO9001\u8D28\u91CF\u4F53\u7CFB\u8BA4\u8BC1\u3001\u201C\u9AD8\u65B0\u6280\u672F\u4F01\u4E1A\u201D\u8BA4\u5B9A\uFF0C\u662F\u4E2D\u56FD\u4E92\u8054\u7F51\u91D1\u878D\u534F\u4F1A\u9996\u6279\u4F1A\u5458\u5355\u4F4D\uFF0C\u4E0A\u6D77\u5E02\u4E92\u8054\u7F51\u91D1\u878D\u884C\u4E1A\u534F\u4F1A\u7406\u4E8B\u5355\u4F4D\u3002\u672A\u6765\uFF0C\u91D1\u94F6\u732B\u5C06\u79C9\u6301\u7740\u9AD8\u6807\u51C6\u98CE\u63A7\u3001\u4E25\u8981\u6C42\u5408\u89C4\u7684\u7CBE\u795E\u7406\u5FF5\u7EE7\u7EED\u4E3A\u4E92\u8054\u7F51\u91D1\u878D\u7684\u53D1\u5C55\u732E\u529B\u732E\u7B56\uFF0C\u79EF\u6781\u62E5\u62B1\u884C\u4E1A\u76D1\u7BA1\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u7B80\u5355\u3001\u89C4\u8303\u7684\u666E\u60E0\u91D1\u878D\u670D\u52A1\u3002"))),
            React.createElement("section", { className: "section section-info" },
                React.createElement("h2", { className: "title" },
                    "\u5DE5\u5546\u4FE1\u606F",
                    React.createElement("span", { className: "link businessLicence jym-hover" }, "\u67E5\u770B\u8425\u4E1A\u6267\u7167")),
                React.createElement("div", { className: "industryInfo" },
                    React.createElement("table", { className: "table" },
                        React.createElement("tbody", null, industryInfo.map(function (item, index) { return (React.createElement("tr", { className: "info-tr", key: index },
                            React.createElement("td", { className: "tr-lt block" }, item.title),
                            React.createElement("td", { className: "tr-gt block" },
                                React.createElement("p", null, item.info)))); }))))),
            React.createElement("section", { className: "section section-setting" },
                React.createElement("h2", { className: "title" }, "\u7EC4\u7EC7\u67B6\u6784\u4E0E\u90E8\u95E8\u8BBE\u7F6E"),
                React.createElement("div", { className: "img" },
                    React.createElement("img", { src: require("./images/jg.png") }))),
            React.createElement("section", { className: "section section-leader" },
                React.createElement("h2", { className: "title" }, "\u9AD8\u7BA1\u4ECB\u7ECD"),
                React.createElement("ul", { className: "leader-list" }, leaderList.map(function (item, index) { return (React.createElement("li", { className: "leader-li", key: index },
                    React.createElement("div", { className: "li-hd clearfix" },
                        React.createElement("span", { className: "name" }, item.name),
                        React.createElement("span", { className: "company" }, item.company),
                        React.createElement("span", { className: "job" }, item.job)),
                    React.createElement("div", { className: "li-info" }, item.info))); }))),
            React.createElement("section", { className: "section section-staff" },
                React.createElement("h2", { className: "title" }, "\u5458\u5DE5\u6570\u636E"),
                React.createElement("div", { className: "staff-wrapper" },
                    React.createElement("div", { className: "staff-container education" },
                        React.createElement("div", { className: "staff-chart" },
                            React.createElement(ReactEchartsCore, { echarts: echarts, option: employeeChart.education }))),
                    React.createElement("div", { className: "staff-container age" },
                        React.createElement("div", { className: "staff-chart" },
                            React.createElement(ReactEchartsCore, { echarts: echarts, option: employeeChart.age, notMerge: true, lazyUpdate: true, theme: "theme_name" }))))),
            React.createElement("section", { className: "section section-staff" },
                React.createElement("h2", { className: "title" },
                    "\u5206\u652F\u673A\u6784: ",
                    React.createElement("span", { className: "sub-title" }, "\u6682\u65E0\u5206\u652F\u673A\u6784"))),
            React.createElement("section", { className: "section section-platform" },
                React.createElement("h2", { className: "title" }, "\u5E73\u53F0\u4FE1\u606F"),
                React.createElement("ul", { className: "platform-info" },
                    React.createElement("li", { className: "clearfix" },
                        React.createElement("p", null, "\u5E73\u53F0\u7F51\u7AD9:"),
                        React.createElement("p", { className: "lt-12" },
                            React.createElement("a", { href: "https://www.jinyinmao.com.cn/", target: "_blanket" }, "https://www.jinyinmao.com.cn"))),
                    React.createElement("li", { className: "clearfix" },
                        React.createElement("p", null, "\u7F51\u7AD9\u4E0A\u7EBF\u8FD0\u8425\u65F6\u95F4:"),
                        React.createElement("p", { className: "lt-12" }, "2013-11-18")),
                    React.createElement("li", { className: "clearfix" },
                        React.createElement("p", null, "\u6CE8\u518C\u534F\u8BAE:"),
                        React.createElement("p", { className: "lt-12" },
                            React.createElement("a", { href: "https://help.jinyinmao.com.cn/#/special/agreement/92be302c95e1487f99d20dc661fdfa6e?type=article", target: "_blanket" }, "\u300A\u91D1\u94F6\u732B\u5E73\u53F0\u4E2A\u4EBA\u4F1A\u5458\u670D\u52A1\u534F\u8BAE\u300B")),
                        React.createElement("p", { className: "lt-12" },
                            React.createElement("a", { href: "https://help.jinyinmao.com.cn/#/special/agreement/81abbe293ea748b4ae28a6261cd5efc9?type=article", target: "_blanket" }, "\u300A\u4E2A\u4EBA\u9690\u79C1\u8BF4\u660E\u300B"))),
                    React.createElement("li", { className: "clearfix" },
                        React.createElement("p", null, "App\u5E94\u7528:"),
                        React.createElement("p", { className: "lt-12" }, "\u91D1\u94F6\u732B")),
                    React.createElement("li", { className: "clearfix" },
                        React.createElement("p", null, "\u5FAE\u4FE1:"),
                        React.createElement("p", { className: "lt-12" }, "\u91D1\u94F6\u732B")),
                    React.createElement("li", { className: "clearfix" },
                        React.createElement("p", null, "\u5FAE\u535A:"),
                        React.createElement("p", { className: "lt-12" }, "\u91D1\u94F6\u732B")),
                    React.createElement("li", { className: "clearfix" },
                        React.createElement("p", null, "\u8054\u7CFB\u7535\u8BDD:"),
                        React.createElement("p", { className: "lt-12" }, "4008-556-333\u6216021-38934666")),
                    React.createElement("li", { className: "clearfix" },
                        React.createElement("p", null, "\u5BA2\u670DQQ:"),
                        React.createElement("p", { className: "lt-12" }, "4008-556-333\u6216021-38934666")),
                    React.createElement("li", { className: "clearfix" },
                        React.createElement("p", null, "\u5BA2\u670D\u90AE\u7BB1:"),
                        React.createElement("p", { className: "lt-12" },
                            React.createElement("a", { className: "link jym-hover", href: "mailto: service @jinyinmao.com.cn" }, "service@jinyinmao.com.cn"))),
                    React.createElement("li", { className: "clearfix" },
                        React.createElement("p", null, "\u901A\u8BAF\u5730\u5740:"),
                        React.createElement("p", { className: "lt-12" }, "\u4E0A\u6D77\u5E02\u6D66\u4E1C\u65B0\u533A\u6768\u9AD8\u5357\u8DEF729\u53F7\u9646\u5BB6\u5634\u4E16\u7EAA\u91D1\u878D\u5E7F\u573A1\u53F7\u697C45\u5C424501\u5BA4"))))));
    };
    return Organization_PC;
}(React.Component));
export default Organization_PC;
//# sourceMappingURL=main-pc.js.map