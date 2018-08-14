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
import { Gallery } from 'react-weui';
import "./style-m";
var Organization_M = /** @class */ (function (_super) {
    __extends(Organization_M, _super);
    function Organization_M() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showSingle: false,
            showMultiple: false,
        };
        return _this;
    }
    Organization_M.prototype.render = function () {
        var _this = this;
        var _a = this.props, introduceList = _a.introduceList, industryInfo = _a.industryInfo, leaderList = _a.leaderList;
        var imgSrc = require("./images/jg_m.png");
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
                industryInfo.map(function (item, index) {
                    return (React.createElement("p", { className: "item", key: index },
                        React.createElement("span", { className: "infoLeft" },
                            item.title,
                            "\uFF1A"),
                        React.createElement("span", { className: "infoRight" }, item.info)));
                })),
            React.createElement("div", { className: "info" },
                React.createElement("h2", { className: "title" }, "\u7EC4\u7EC7\u67B6\u6784\u4E0E\u90E8\u95E8\u6846\u67B6"),
                React.createElement("img", { className: "img", src: imgSrc, onClick: function (e) { return _this.setState({ showSingle: true }); } }),
                React.createElement(Gallery, { src: imgSrc, show: this.state.showSingle },
                    React.createElement("span", { className: "close", onClick: function (e) { return _this.setState({ showSingle: false }); } }, "X"))),
            React.createElement("div", { className: "info" },
                React.createElement("h2", { className: "title" }, "\u9AD8\u7BA1\u4ECB\u7ECD"),
                leaderList.map(function (item, index) {
                    return (React.createElement("div", { className: "managerInfo", key: index },
                        React.createElement("h3", { className: "managerTitle" },
                            React.createElement("span", { className: "name" }, item.name),
                            React.createElement("span", { className: "post" },
                                item.company,
                                "\u00A0\u00A0\u00A0\u00A0",
                                item.job)),
                        React.createElement("p", { className: "managerDesc" }, item.info)));
                })),
            React.createElement("div", { className: "info" },
                React.createElement("h2", { className: "title" }, "\u5458\u5DE5\u6570\u636E"),
                React.createElement("div", { className: "employeeInfo" },
                    React.createElement("img", { className: "img", src: require("./images/employee.png") }))),
            React.createElement("div", { className: "info" },
                React.createElement("h2", { className: "title" }, "\u5206\u652F\u673A\u6784"),
                React.createElement("div", { className: "branchInfo" }, "\u6682\u65E0\u5206\u652F\u673A\u6784")),
            React.createElement("div", { className: "info" },
                React.createElement("h3", { className: "title" }, "\u5E73\u53F0\u4FE1\u606F"),
                React.createElement("p", { className: "item" },
                    React.createElement("span", { className: "infoLeft" }, "\u5E73\u53F0\u7F51\u5740\uFF1A"),
                    React.createElement("span", { className: "infoRight" }, "https://www.jinyinmao.com.cn")))));
    };
    return Organization_M;
}(React.Component));
export default Organization_M;
//# sourceMappingURL=main-m.js.map