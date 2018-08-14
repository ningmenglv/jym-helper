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
import Layout from "@/page/layout";
import ReportDetail_M from "@/page/platform/reportDetail/main-m";
import ReportDetail_PC from "@/page/platform/reportDetail/main-pc";
import { UTIL } from "@/service/util2";
import Axios from "axios";
import { Constant } from "@/constant";
var ReportDetailPage = /** @class */ (function (_super) {
    __extends(ReportDetailPage, _super);
    function ReportDetailPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            reportDetail: {
                identifier: '',
                imgContentUrl: '',
                imgTitleUrl: '',
                releaseTime: '',
                title: ''
            }
        };
        return _this;
    }
    ReportDetailPage.prototype.componentWillMount = function () {
        var guid = this.getGuid();
        this.getReportDetail(guid);
    };
    ReportDetailPage.prototype.getGuid = function () {
        var guid = UTIL.Url.getUrlParam({ name: 'guid' });
        console.log(guid);
        return guid;
    };
    ReportDetailPage.prototype.getReportDetail = function (guid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                Axios.get(Constant.hosts.SERVER_OPER + "/api/Article/PresentationData", {
                    params: {
                        guid: guid
                    }
                }).then(function (res) {
                    //返回结果集
                    var data = res.data; // 获取数据
                    // console.log(data)
                    _this.setState({
                        reportDetail: data
                    });
                    console.log(_this.state.reportDetail);
                });
                return [2 /*return*/];
            });
        });
    };
    ReportDetailPage.prototype.render = function () {
        // let id = "e9ab432bc6f54127802bbb6ff485fd60"
        var isM = UTIL.DeviceJudge.isM();
        return (React.createElement("div", { id: "reportDetil-page" }, isM ? React.createElement(ReportDetail_M, __assign({}, this.state)) : React.createElement(ReportDetail_PC, __assign({}, this.state))));
    };
    return ReportDetailPage;
}(React.Component));
export default ReportDetailPage;
Layout(ReportDetailPage, {
    typeIndex: 2,
    activeIndex: 0,
    title: "金银猫运营报告详情",
    status: true
});
//# sourceMappingURL=reportDetail.js.map