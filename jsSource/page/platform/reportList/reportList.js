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
import Layout from "@/page/layout";
import ReportList_M from "@/page/platform/reportList/main-m";
import ReportList_PC from "@/page/platform/reportList/main-pc";
import { UTIL } from "@/service/util2";
var ReportListPage = /** @class */ (function (_super) {
    __extends(ReportListPage, _super);
    function ReportListPage(props) {
        return _super.call(this, props) || this;
    }
    ReportListPage.prototype.render = function () {
        var isM = UTIL.DeviceJudge.isM();
        return (React.createElement("div", { id: "report-page" }, isM ? React.createElement(ReportList_M, null) : React.createElement(ReportList_PC, null)));
    };
    return ReportListPage;
}(React.Component));
export default ReportListPage;
Layout(ReportListPage, {
    typeIndex: 2,
    activeIndex: 0,
    title: "金银猫运营报告",
    status: true
});
//# sourceMappingURL=reportList.js.map