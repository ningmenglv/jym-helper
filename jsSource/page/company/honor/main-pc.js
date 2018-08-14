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
import './style-pc.less';
var Honor_PC = /** @class */ (function (_super) {
    __extends(Honor_PC, _super);
    function Honor_PC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Honor_PC.prototype.render = function () {
        console.log(this.props);
        var honorList = this.props.honorList;
        return (React.createElement("div", { id: "milepost-pc", className: "page-pc" },
            React.createElement("ul", { className: "honorList" },
                honorList.map(function (item, index) { return (React.createElement("li", { key: index },
                    React.createElement("div", { className: "honor_li" },
                        React.createElement("img", { src: "https://jymstoretest.blob.core.chinacloudapi.cn/publicfiles/office/EnterpriseManager/EstateScreenshots/2018-07-13/20180713103415320.png" })),
                    React.createElement("h2", { className: "honor_title" }, "\u5C1D\u89C2\u5357\u4F2F\u5B50\u8475\u95EE\u5973\u504A\u4E4B\u95FB\u9053"))); }),
                React.createElement("li", null,
                    React.createElement("div", { className: "honor_li" },
                        React.createElement("img", { src: "https://jymstoretest.blob.core.chinacloudapi.cn/publicfiles/office/EnterpriseManager/EstateScreenshots/2018-07-13/20180713103432985.png" })),
                    React.createElement("h2", { className: "honor_title" }, "\u4E0D\u62DC\u5929\u5730\u6D69\u8361\uFF0C\u6CB3\u5C71\u5E7D\u5FAE\uFF0C\u4E0D\u62DC\u9AD8\u5802\u6D4E\u6E05\u8F89")))));
    };
    return Honor_PC;
}(React.Component));
export default Honor_PC;
//# sourceMappingURL=main-pc.js.map