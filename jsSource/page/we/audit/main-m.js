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
import { Gallery } from "react-weui";
import "./style-m.less";
var Audit_M = /** @class */ (function (_super) {
    __extends(Audit_M, _super);
    function Audit_M() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showImg: false
        };
        return _this;
    }
    Audit_M.prototype.render = function () {
        var _this = this;
        var auditList = this.props.auditList;
        var img1 = require("./imgs/audit1.m.png");
        var img2 = require("./imgs/audit2.m.png");
        var state = this.state;
        return (React.createElement("div", { id: "audit-m", className: "page-m" },
            React.createElement("div", { className: "sectionImg", onClick: function (e) { return _this.setState({ showImg: true }); } },
                React.createElement("div", { className: "auditImg" },
                    React.createElement("img", { src: img1 })),
                React.createElement("div", { className: "auditImg" },
                    React.createElement("img", { src: img2 }))),
            React.createElement("div", { className: "result" }, auditList.map(function (item, index) { return (React.createElement("p", { key: index },
                item.title,
                "\uFF1A",
                item.info)); })),
            React.createElement(Gallery, { src: [img1, img2], show: state.showImg },
                React.createElement("span", { className: "close", onClick: function (e) { return _this.setState({ showImg: false }); } }, "X"))));
    };
    return Audit_M;
}(React.Component));
export default Audit_M;
//# sourceMappingURL=main-m.js.map