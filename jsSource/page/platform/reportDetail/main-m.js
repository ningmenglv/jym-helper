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
import React from 'react';
import './style-m.less';
var ReportDetail_M = /** @class */ (function (_super) {
    __extends(ReportDetail_M, _super);
    function ReportDetail_M(props) {
        return _super.call(this, props) || this;
    }
    ReportDetail_M.prototype.render = function () {
        console.log(this.props);
        var reportDetail = this.props.reportDetail;
        return (React.createElement("div", { id: "reportDetail-m" },
            React.createElement("div", { className: 'img-box' },
                React.createElement("img", { className: 'img', src: reportDetail.imgContentUrl }))));
    };
    return ReportDetail_M;
}(React.Component));
export default ReportDetail_M;
//# sourceMappingURL=main-m.js.map