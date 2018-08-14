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
import * as React from "react";
var Organization_M = /** @class */ (function (_super) {
    __extends(Organization_M, _super);
    function Organization_M() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Organization_M.prototype.render = function () {
        var introduceList = this.props.introduceList;
        // , leaderList, industryInfo, employeeInfo
        return (React.createElement("div", { id: "organization-m" },
            React.createElement("div", { className: "info" },
                React.createElement("h2", { className: "title" }, introduceList.title),
                introduceList.info.map(function (item, index) {
                    return (React.createElement("p", { className: "introduceInfo", key: index }, item));
                })),
            React.createElement("div", { className: "info" },
                React.createElement("h2", { className: "title" },
                    "\u5DE5\u5546\u4FE1\u606F",
                    React.createElement("span", { className: "businessLicence" }, "\u67E5\u770B\u8425\u4E1A\u6267\u7167")),
                React.createElement("p", { className: "item" },
                    React.createElement("span", { className: "infoLeft" }, "\u516C\u53F8\u5168\u79F0\u53CA\u7B80\u79F0\uFF1A"),
                    "\u4E0A\u6D77\u91D1\u94F6\u732B\u91D1\u878D\u670D\u52A1\u6709\u9650\u516C\u53F8\uFF08\u91D1\u94F6\u732B\uFF09 Shanghai Fortune Cat Financial Service Co.,Ltd"),
                React.createElement("p", { className: "item" },
                    React.createElement("span", { className: "infoLeft" }, "\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801\uFF1A"),
                    "9131011508001345XC"),
                React.createElement("p", { className: "item" },
                    React.createElement("span", { className: "infoLeft" }, "\u516C\u53F8\u6CE8\u518C\u8D44\u672C\uFF1A"),
                    "3000.0000\u4E07\u5143\u6574"),
                React.createElement("p", { className: "item" },
                    React.createElement("span", { className: "infoLeft" }, "\u516C\u53F8\u5B9E\u7F34\u6CE8\u518C\u8D44\u672C\uFF1A"),
                    "1000.0000\u4E07\u5143\u6574"),
                React.createElement("p", { className: "item" },
                    React.createElement("span", { className: "infoLeft" }, "\u516C\u53F8\u6CE8\u518C\u5730\u5740\uFF1A"),
                    "\u4E2D\u56FD\uFF08\u4E0A\u6D77\uFF09\u81EA\u7531\u8D38\u6613\u8BD5\u9A8C\u533A\u5546\u57CE\u8DEF1287\u53F71\u5E62\u4E09\u5C42315A"),
                React.createElement("p", { className: "item" },
                    React.createElement("span", { className: "infoLeft" }, "\u516C\u53F8\u7ECF\u8425\u5730\u5740\uFF1A"),
                    "\u4E0A\u6D77\u5E02\u6D66\u4E1C\u65B0\u533A\u6768\u9AD8\u5357\u8DEF729\u53F7\u9646\u5BB6\u5634\u4E16\u7EAA\u91D1\u878D\u5E7F\u573A1\u53F7\u697C45\u5C424501\u5BA4")),
            React.createElement("div", { className: "slide" }, ">>"),
            React.createElement("div", { className: "reduice" },
                React.createElement("p", { className: "item" },
                    React.createElement("span", { className: "infoLeft" }, "\u516C\u53F8\u6210\u7ACB\u65F6\u95F4\uFF1A"),
                    "2013\u5E749\u670827\u65E5"))));
    };
    return Organization_M;
}(React.Component));
export default Organization_M;
//# sourceMappingURL=organization-m.js.map