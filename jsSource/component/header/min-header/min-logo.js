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
import Popover from 'antd/lib/popover';
import SideIcon from './side-icon/side-icon';
import { Hosts } from '@/constant';
import 'antd/lib/popover/style';
// 微信Popover
export var WeixinPopover = function () {
    return (React.createElement(Popover, { overlayClassName: "header-popper-qr", trigger: "hover", arrowPointAtCenter: true, placement: "bottom", content: React.createElement("div", null,
            React.createElement("div", { className: "qr jymweixin" }),
            React.createElement("p", { className: "desc" }, "\u5173\u6CE8\u91D1\u94F6\u732B\u5FAE\u4FE1")) },
        React.createElement("span", null,
            React.createElement(SideIcon, { className: "jym-pointer", activeColor: "#44b549", iconClass: "iconfont icon-weixin" }))));
};
// QQPopover
export var QQPopover = function () {
    return (React.createElement(Popover, { overlayClassName: "header-popper-qq", trigger: "hover", arrowPointAtCenter: true, placement: "bottom", content: React.createElement("div", null,
            React.createElement("p", { className: "desc" }, "\u5B98\u65B9\u4EA4\u6D411\u7FA4"),
            React.createElement("p", { className: "desc" },
                "QQ: ",
                React.createElement("span", { className: "focus" }, "368910758"),
                " (\u6EE1)"),
            React.createElement("p", { className: "desc" }, "\u5B98\u65B9\u4EA4\u6D412\u7FA4"),
            React.createElement("p", { className: "desc" },
                "QQ: ",
                React.createElement("span", { className: "focus" }, "271865771"))) },
        React.createElement("span", null,
            React.createElement(SideIcon, { className: "jym-pointer", activeColor: "#20A0FF", iconClass: "iconfont icon-qq" }))));
};
// 金银猫APPPopover
var AppPopover = /** @class */ (function (_super) {
    __extends(AppPopover, _super);
    function AppPopover(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            className: ''
        };
        return _this;
    }
    AppPopover.prototype.render = function () {
        var _this = this;
        return (React.createElement(Popover, { overlayClassName: "header-popper-qr", trigger: "hover", arrowPointAtCenter: true, placement: "bottom", content: React.createElement("div", null,
                React.createElement("div", { className: "qr jymapp" }),
                React.createElement("p", { className: "desc" }, "\u4E0B\u8F7D\u91D1\u94F6\u732BAPP")) },
            React.createElement("div", { className: "logo-list", onMouseEnter: function () { return _this.setState({ className: 'hover' }); }, onMouseLeave: function () { return _this.setState({ className: '' }); } },
                React.createElement("a", { href: Hosts.production.WEB_WELCOME + '/download', className: "tel-info jym-hover" }, "\u624B\u673A\u5BA2\u6237\u7AEF"),
                React.createElement(SideIcon, { className: this.state.className, activeColor: "#ff9001", iconClass: "iconfont icon-shouji" }))));
    };
    return AppPopover;
}(React.Component));
export { AppPopover };
//# sourceMappingURL=min-logo.js.map