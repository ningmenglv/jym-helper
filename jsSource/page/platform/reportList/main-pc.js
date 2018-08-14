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
import React from 'react';
import './style-pc.less';
import { Pagination } from 'antd';
import 'antd/dist/antd.less';
import Axios from "axios";
import { Constant } from "@/constant";
var itemRender = function (current, type, originalElement) {
    if (type === 'prev') {
        return React.createElement("a", null, "◀ 上一页");
    }
    if (type === 'next') {
        return React.createElement("a", null, "下一页 ▶");
    }
    return originalElement;
};
var ReportList_PC = /** @class */ (function (_super) {
    __extends(ReportList_PC, _super);
    function ReportList_PC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            reportList: {
                hasNextPage: true,
                items: [],
                pageIndex: 1,
                pageSize: 6,
                totalCount: 0,
                totalPageCount: 0,
            }
        };
        _this.getReportList = function (pageIndex) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log(111);
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
                            items: dataList,
                            pageIndex: data.pageIndex,
                            pageSize: data.pageSize,
                            totalCount: data.totalCount,
                            totalPageCount: data.totalPageCount,
                        }
                    });
                });
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    ReportList_PC.prototype.componentWillMount = function () {
        this.getReportList(1);
    };
    ReportList_PC.prototype.render = function () {
        console.log(this.state.reportList.totalPageCount);
        return (React.createElement("div", { id: 'reportList-pc' },
            React.createElement("div", { className: 'reportList' },
                React.createElement("ul", { className: 'report-main' }, this.state.reportList.items.map(function (item, index) {
                    return (React.createElement("li", { key: index },
                        React.createElement("a", { href: "/html/platform/reportDetail.html?guid=" + item.identifier },
                            React.createElement("p", null, item.title),
                            React.createElement("div", { className: 'title-bg' }),
                            React.createElement("img", { src: item.imgTitleUrl }))));
                })),
                React.createElement("div", { className: 'pageTab jym-pagination' },
                    React.createElement(Pagination, { hideOnSinglePage: true, defaultCurrent: 1, total: this.state.reportList.totalCount, pageSize: this.state.reportList.pageSize, onChange: this.getReportList, itemRender: itemRender }),
                    this.state.reportList.totalPageCount !== 1 &&
                        React.createElement("span", { className: 'pageTotal' },
                            "\u5171",
                            this.state.reportList.totalCount,
                            "\u6761\u8BB0\u5F55 \u7B2C",
                            this.state.reportList.pageIndex,
                            "\u9875")))));
    };
    return ReportList_PC;
}(React.Component));
export default ReportList_PC;
//# sourceMappingURL=main-pc.js.map