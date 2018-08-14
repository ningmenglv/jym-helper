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
import React from "react";
import "./style-m.less";
import { InfiniteLoader, LoadMore } from "react-weui";
import Axios from "axios";
import { Constant } from "@/constant";
var ReportList_M = /** @class */ (function (_super) {
    __extends(ReportList_M, _super);
    function ReportList_M() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            reportList: {
                hasNextPage: true,
                items: [],
                pageIndex: 1,
                pageSize: 12,
                totalCount: 0,
                totalPageCount: 0,
            }
        };
        return _this;
    }
    ReportList_M.prototype.componentWillMount = function () {
        this.getReportList(this.state.reportList.pageIndex);
    };
    ReportList_M.prototype.getReportList = function (pageIndex) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                Axios.get(Constant.hosts.SERVER_OPER + "/api/Article/PresentationPaging", {
                    params: {
                        pageIndex: pageIndex,
                        pageSize: this.state.reportList.pageSize
                    }
                }).then(function (res) {
                    var data = res.data; // 获取数据
                    var dataList = data.items || []; //数据报告数据列表
                    console.log(data);
                    _this.setState({
                        reportList: {
                            hasNextPage: data.hasNextPage,
                            items: _this.state.reportList.items.concat(dataList),
                            pageIndex: data.pageIndex,
                            totalPageCount: data.totalPageCount,
                        }
                    });
                    if (args.length === 0)
                        return;
                    var resolve = args[0], finish = args[1];
                    if (!data.hasNextPage) {
                        finish();
                        return;
                    }
                    resolve();
                });
                return [2 /*return*/];
            });
        });
    };
    // 每次上滑 加载一页的内容 pageSize 默认为 12条数据（避免数据列表小于 屏幕垂直方向长度）
    ReportList_M.prototype.render = function () {
        var _this = this;
        console.log(this.state.reportList.items);
        return (React.createElement("div", { id: "reportList-m" },
            React.createElement(InfiniteLoader, { loaderLoadingIcon: React.createElement(LoadMore, { loading: true }, "\u52A0\u8F7D\u4E2D"), loaderDefaultIcon: React.createElement(LoadMore, { showLine: true }, "\u6CA1\u6709\u6570\u636E\u4E86"), onLoadMore: function (resolve, finish) {
                    _this.getReportList(_this.state.reportList.pageIndex + 1, resolve, finish);
                } },
                React.createElement("div", null, this.state.reportList.items.map(function (item, index) {
                    var timeToDate = new Date(item.title);
                    var month = timeToDate.getMonth() + 1;
                    var year = timeToDate.getFullYear();
                    console.log(year + ':' + month);
                    return (React.createElement("a", { key: index, href: "/html/platform/reportDetail.html?guid=" + item.identifier },
                        React.createElement("div", { className: "item-box" },
                            React.createElement("div", { className: "item" },
                                React.createElement("p", null,
                                    year,
                                    " \u5E74 ",
                                    month,
                                    "\u6708\u4EFD \u8FD0\u8425\u62A5\u544A")))));
                })))));
    };
    return ReportList_M;
}(React.Component));
export default ReportList_M;
//# sourceMappingURL=main-m.js.map