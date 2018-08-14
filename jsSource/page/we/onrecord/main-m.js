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
import React from "react";
import "./style-m.less";
var Onrecord_M = /** @class */ (function (_super) {
    __extends(Onrecord_M, _super);
    function Onrecord_M() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Onrecord_M.prototype.render = function () {
        var recordList = [
            { title: "备案信息" },
            { title: "电信业务经营许可信息" },
            { title: "资金存管信息" },
            { title: "信息安全测评认证信息" }
        ];
        return (React.createElement("div", { id: "onrecord-m", className: "page-m" },
            recordList.map(function (item, index) {
                return (React.createElement("div", { className: "section", key: index },
                    React.createElement("h2", { className: "title" }, item.title),
                    React.createElement("div", { className: "img" },
                        React.createElement("img", { src: require("./images/" + (index + 1) + ".png") }))));
            }),
            React.createElement("div", { className: "section" },
                React.createElement("h2", { className: "title" }, "\u7F51\u7AD9\u5907\u6848\u4FE1\u606F"),
                React.createElement("div", { className: "desc" }, "\u516C\u5B89\u673A\u5173\u6838\u53D1\u7684\u7F51\u7AD9\u5907\u6848\u56FE\u6807\u53CA\u7F16\u53F7\uFF1A\u5907\u6848\u5B8C\u6210\u62AB\u9732"))));
    };
    return Onrecord_M;
}(React.Component));
export default Onrecord_M;
//# sourceMappingURL=main-m.js.map