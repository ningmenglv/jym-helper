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
import React, { Component, Fragment } from "react";
import "./nav-sub.less";
var NavSub = /** @class */ (function (_super) {
    __extends(NavSub, _super);
    function NavSub() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            firstMouseenter: false,
            lastMouseenter: false
        };
        return _this;
    }
    NavSub.prototype.render = function () {
        var _this = this;
        var items = this.props.items;
        var xLen = items.length - 1;
        return (React.createElement(Fragment, null,
            React.createElement("div", { className: "jym-sub-nav" },
                items.length > 0 && (React.createElement("div", { className: "nav-list " + (this.state.lastMouseenter ? "active" : "") },
                    React.createElement("a", { onMouseEnter: function () { return _this.setState({ firstMouseenter: true }); }, onMouseLeave: function () { return _this.setState({ firstMouseenter: false }); }, href: items[0].path }, items[0].label),
                    items.slice(1, xLen).map(function (item, index) { return (React.createElement("a", { href: item.path, key: index }, item.label)); }),
                    items.length > 1 && (React.createElement("a", { onMouseEnter: function () { return _this.setState({ lastMouseenter: true }); }, onMouseLeave: function () { return _this.setState({ lastMouseenter: false }); }, href: items[xLen].path }, items[xLen].label)))),
                React.createElement("i", { className: "iconfont icon-icon-up " + (this.state.firstMouseenter ? "active" : "") }))));
    };
    return NavSub;
}(Component));
export default NavSub;
//# sourceMappingURL=nav-sub.js.map