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
import React, { Component } from "react";
import Axios from 'axios';
import { Constant } from "@/constant";
import { UTIL } from "@/service/util2";
import NavSub from "./nav-sub/nav-sub";
import navData from "./data.yml";
import "./nav.less";
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            operating_days: 0
        };
        return _this;
    }
    Nav.prototype.componentWillMount = function () {
        if (this.props.typeIndex === 8) {
            this.requestDataList();
        }
    };
    Nav.prototype.requestDataList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Axios.get(Constant.hosts.SERVER_RPT + "/home/statistics.do")];
                    case 1:
                        data = _a.sent();
                        if (data.status === 200) {
                            this.setState({
                                operating_days: data.data.operating_days
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 根据typeIndex渲染不同的背景
    Nav.prototype.navBackground = function () {
        var typeIndex = this.props.typeIndex;
        var path = "";
        if (typeIndex && typeIndex !== 3) {
            path = require("./img/nav_bg" + typeIndex + ".jpg");
        }
        return path ? { backgroundImage: "url(" + path + ")" } : {};
    };
    // 导航上的按钮组件
    Nav.prototype.linkNav = function (props) {
        var len = props.item.items ? props.item.items.length : 0;
        var className = "text " + (props.activeIndex === props.index ? "active" : "") + " " + (!len ? "paddingR36" : "");
        return (React.createElement("a", { className: className, href: props.item.path },
            props.item.label,
            !!len && React.createElement("i", { className: "iconfont icon-jiantou-copy-copy" })));
    };
    Nav.prototype.getParentClass = function () {
        var typeIndex = this.props.typeIndex;
        var className = '';
        if (typeIndex > 0) {
            className += 'active-bg';
        }
        if (typeIndex === 3) {
            className += className ? ' special-bg' : 'special-bg';
        }
        else if (typeIndex === 8) {
            className += className ? ' big-bg' : 'big-bg';
        }
        return className;
    };
    Nav.prototype.render = function () {
        var _this = this;
        var parentClassName = this.getParentClass();
        var subImgPath = !this.props.title && this.props.subImg
            ? require("./img/sub_bg" + this.props.typeIndex + ".png")
            : "";
        return (React.createElement("div", { id: "jym-nav", className: parentClassName, style: this.navBackground() },
            React.createElement("div", { className: "jym-nav" },
                React.createElement("ul", { className: "container" }, navData.items.map(function (item, index) { return (React.createElement("li", { className: "item", key: index },
                    React.createElement(_this.linkNav, { item: item, index: index, activeIndex: _this.props.activeIndex }),
                    item.items &&
                        item.items.length > 0 && React.createElement(NavSub, { items: item.items }))); }))),
            this.props.status && (React.createElement("div", { className: "page-title container" },
                subImgPath ? (React.createElement("img", { className: "sub-img", src: subImgPath })) : (this.props.typeIndex !== 3 ? React.createElement("strong", { className: "font-yueyuan" }, this.props.title) : null),
                this.props.typeIndex === 8 && (React.createElement("div", { className: "totalday" },
                    "\u8FD0\u8425\u603B\u5929\u6570\uFF1A",
                    React.createElement("span", null, UTIL.Tools.splitNumb(this.state.operating_days)),
                    "\u5929"))))));
    };
    return Nav;
}(Component));
export default Nav;
//# sourceMappingURL=nav.js.map