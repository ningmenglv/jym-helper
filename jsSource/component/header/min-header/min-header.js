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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from "react";
import { WeixinPopover, QQPopover, AppPopover } from "./min-logo";
import { Constant, Page } from "@/constant";
import SideIcon from "./side-icon/side-icon";
import Cookies from "js-cookie";
var MinHeader = /** @class */ (function (_super) {
    __extends(MinHeader, _super);
    function MinHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.weiboSetting = {
            activeColor: "#d66666",
            iconClass: "iconfont icon-xinlang"
        };
        _this.token = Cookies.get(Constant.storage.TOKEN_NAME);
        return _this;
    }
    MinHeader.prototype.operation = function () {
        if (this.token) {
            Cookies.remove(Constant.storage.TOKEN_NAME, {
                domain: Constant.ENV === "development" ? "" : ".jinyinmao.com.cn"
            });
            return window.location.reload();
        }
        window.location.href = Constant.hosts.WEB_WWW + Page.path.REGISTER;
    };
    MinHeader.prototype.render = function () {
        return (React.createElement("div", { id: "min-header" },
            React.createElement("div", { className: "container clearfix" },
                React.createElement("div", { className: "left-block" },
                    React.createElement("div", { className: "tel-info" },
                        "\u5BA2\u670D\u70ED\u7EBF",
                        React.createElement("span", { className: "focus" }, "4008-556-333"),
                        "\u6216",
                        React.createElement("span", { className: "focus" }, "021-38934666")),
                    React.createElement("div", { className: "logo-list" },
                        React.createElement(WeixinPopover, null),
                        React.createElement("a", { href: "https://weibo.com/u/3822187413" },
                            React.createElement(SideIcon, __assign({}, this.weiboSetting))),
                        React.createElement(QQPopover, null))),
                React.createElement("div", { className: "right-block" },
                    React.createElement(AppPopover, null),
                    React.createElement("a", { className: "jym-hover link-info focus", href: this.token
                            ? Constant.hosts.WEB_I
                            : Constant.hosts.WEB_WWW + Page.path.LOGIN },
                        "[",
                        this.token ? "我的金银猫" : "登录",
                        "]"),
                    React.createElement("a", { className: "jym-hover link-info white", onClick: this.operation.bind(this) },
                        "[",
                        this.token ? "安全退出" : "注册",
                        "]"),
                    React.createElement("a", { className: "jym-hover link-info", href: "/html/helpcenter/question" }, "\u5E2E\u52A9\u4E2D\u5FC3")))));
    };
    return MinHeader;
}(React.Component));
export default MinHeader;
//# sourceMappingURL=min-header.js.map