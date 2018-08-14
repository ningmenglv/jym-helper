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
import "./cell.less";
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cell.prototype.render = function () {
        var _this = this;
        var data = this.props.data;
        return (React.createElement("div", { className: "jym-cell", onClick: function () { return _this.handlerClick(); } }, (function () {
            if (data.link) {
                return (React.createElement("a", { href: data.link, target: "_blanket" },
                    React.createElement("p", { className: "title" }, data.title),
                    React.createElement("p", { className: "info" }, data.info)));
            }
            else {
                return (React.createElement("div", null,
                    React.createElement("p", { className: "title" }, data.title),
                    React.createElement("p", { className: "info" }, data.info)));
            }
        })()));
    };
    // 点击事件
    Cell.prototype.handlerClick = function () {
        if (this.props.onClick) {
            this.props.onClick(this.props.data);
        }
    };
    return Cell;
}(React.Component));
export default Cell;
//# sourceMappingURL=cell.js.map