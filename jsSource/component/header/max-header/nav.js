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
import { Constant, Page } from "@/constant";
import Cookies from "js-cookie";
var SubNav = /** @class */ (function (_super) {
    __extends(SubNav, _super);
    function SubNav() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.links = [
            {
                label: "所有产品",
                path: Constant.hosts.WEB_WWW + Page.path.product.LIST
            },
            {
                label: "银企众盈",
                path: Constant.hosts.WEB_WWW + Page.path.product.LIST + "?type=yinpiao"
            },
            {
                label: "商融保盈",
                path: Constant.hosts.WEB_WWW + Page.path.product.LIST + "?type=shangpiao"
            },
            {
                label: "普惠众盈",
                path: Constant.hosts.WEB_WWW + Page.path.product.LIST + "?type=puhui"
            }
        ];
        return _this;
    }
    SubNav.prototype.render = function () {
        return this.links.map(function (item) { return (React.createElement("a", { href: item.path, key: item.label }, item.label)); });
    };
    return SubNav;
}(React.Component));
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.token = Cookies.get(Constant.storage.TOKEN_NAME);
        return _this;
    }
    Nav.prototype.render = function () {
        return (React.createElement("div", { className: "header-nav" },
            React.createElement("ul", null,
                React.createElement("li", { className: "item" },
                    React.createElement("a", { className: "jym-hover text", href: Constant.hosts.WEB_WWW }, "\u9996\u9875")),
                React.createElement("li", { className: "item" },
                    React.createElement("a", { className: "jym-hover text", href: Constant.hosts.WEB_WWW + Page.path.product.YEM }, "\u4F59\u989D\u732B")),
                React.createElement("li", { className: "item" },
                    React.createElement("a", { className: "jym-hover text sub-nav-main", href: Constant.hosts.WEB_WWW + Page.path.product.LIST }, "\u5B9A\u671F\u4EA7\u54C1"),
                    React.createElement("div", { className: "sub-nav" },
                        React.createElement(SubNav, null))),
                React.createElement("li", { className: "item active", style: { marginRight: "130px" } },
                    React.createElement("a", { className: "jym-hover text", href: Constant.hosts.WEB_HELP }, "\u4FE1\u606F\u62AB\u9732")),
                React.createElement("li", { className: "item" },
                    React.createElement("a", { className: this.token
                            ? "active jym-hover myaccount"
                            : "jym-hover myaccount", href: this.token ? Constant.hosts.WEB_I : Constant.hosts.WEB_WWW },
                        React.createElement("i", { className: this.token ? "active login-min" : "login-min" }),
                        React.createElement("span", { className: "text" }, "\u6211\u7684\u8D26\u6237"))))));
    };
    return Nav;
}(React.Component));
export default Nav;
//# sourceMappingURL=nav.js.map