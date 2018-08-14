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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { Component, Fragment } from "react";
import Contact from "./contact";
import { Page } from "@/constant";
import { RequestFriendlyLinks } from "@/request/other";
import { linkList, cooperationList } from "./data";
import "./footer.less";
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            friendlyLinks: []
        };
        return _this;
    }
    Footer.prototype.componentWillMount = function () {
        this.getFriendLinks();
    };
    // 友情链接
    Footer.prototype.getFriendLinks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RequestFriendlyLinks()];
                    case 1:
                        data = _a.sent();
                        this.setState({
                            friendlyLinks: data.data
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // 渲染友情链接
    Footer.prototype.renderFriendLinks = function () {
        return (React.createElement("ul", { className: "friendLink-list" }, this.state.friendlyLinks.map(function (item, index) {
            return (React.createElement("li", { key: index },
                React.createElement("a", { className: "jym-hover conv", href: item.link }, item.name)));
        })));
    };
    Footer.prototype.renderCooperationList = function () {
        return (React.createElement(Fragment, null, cooperationList.map(function (item, index) {
            return (React.createElement("li", { key: index },
                React.createElement("a", { href: item.href, className: "link-" + (index + 1) })));
        })));
    };
    // 渲染 [关于金银猫, 帮助中心] 下各4联li
    Footer.prototype.renderLinksList = function () {
        // linkList 数据来自于 ./data.js
        return (React.createElement(Fragment, null, linkList.map(function (category) { return (React.createElement("div", { className: category.className + " links-box", key: category.className },
            React.createElement("div", { className: "title" }, category.title),
            React.createElement("ul", { className: "list" }, category.list.map(function (item, index) { return (React.createElement("li", { key: index },
                React.createElement("a", { href: item.href, className: "jym-hover" }, item.title))); })))); })));
    };
    Footer.prototype.render = function () {
        var RenderFriendLinks = this.renderFriendLinks.bind(this);
        return (React.createElement("div", { id: "footer" },
            React.createElement("div", { className: "totally-footer-container container" },
                React.createElement("div", { className: "footer-hd clearfix" },
                    React.createElement("div", { className: "footer-main" },
                        React.createElement("div", { className: "main-links" },
                            React.createElement(this.renderLinksList, null))),
                    React.createElement(Contact, null)),
                React.createElement("div", { className: "footer-friendLink" },
                    React.createElement("div", { className: "friendLink-tag" }, "\u53CB\u60C5\u94FE\u63A5\uFF1A"),
                    React.createElement(RenderFriendLinks, null)),
                React.createElement("div", { className: "footer-copyright" },
                    Page.RECORD.COPY_RIGHT,
                    "\u00A0\u00A0",
                    Page.RECORD.COMPANY,
                    "\u00A0\u00A0",
                    Page.RECORD.THE_COPY_RIGHT,
                    "\u00A0\u00A0",
                    Page.SECURITY_HINT),
                React.createElement("div", { className: "footer-copyright" },
                    "\u589E\u503C\u7535\u4FE1\u4E1A\u52A1\u7ECF\u8425\u8BB8\u53EF\u8BC1\u7F16\u53F7: ",
                    Page.RECORD.LICENCE_ID,
                    "\u00A0\u00A0 \u5907\u6848\u53F7\uFF1A",
                    Page.RECORD.RECORD_ID,
                    "\u00A0\u00A0\u7531\u5FAE\u8F6F\u63D0\u4F9B\u6280\u672F\u652F\u6301"),
                React.createElement("div", { className: "footer-linkimg" },
                    React.createElement("ul", { className: "linkimg-list" },
                        React.createElement(this.renderCooperationList, null))))));
    };
    return Footer;
}(Component));
export default Footer;
//# sourceMappingURL=footer.js.map