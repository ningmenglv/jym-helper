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
import * as React from "react";
import Audit_Pc from "./main-pc";
import Audit_M from "./main-m";
import Layout from "../../layout";
import { UTIL } from "@/service/util2";
var AuditPage = /** @class */ (function (_super) {
    __extends(AuditPage, _super);
    function AuditPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            auditList: [{
                    title: '审计意见',
                    info: '--'
                }, {
                    title: '经营合规重点环节的审计结果',
                    info: '--'
                }]
        };
        return _this;
    }
    AuditPage.prototype.render = function () {
        var isM = UTIL.DeviceJudge.isM();
        var auditList = this.state.auditList;
        return (React.createElement("div", { id: "audit_M-page" }, isM ? React.createElement(Audit_M, { auditList: auditList }) : React.createElement(Audit_Pc, { auditList: auditList })));
    };
    return AuditPage;
}(React.Component));
Layout(AuditPage, {
    typeIndex: 1,
    activeIndex: 0,
    title: "审计信息",
    status: true
});
//# sourceMappingURL=audit.js.map