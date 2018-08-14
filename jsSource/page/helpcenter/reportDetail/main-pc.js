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
import './style-pc.less';
var ReportDetail_PC = /** @class */ (function (_super) {
    __extends(ReportDetail_PC, _super);
    function ReportDetail_PC(props) {
        return _super.call(this, props) || this;
    }
    ReportDetail_PC.prototype.render = function () {
        console.log(this.props);
        var reportDetail = this.props.reportDetail;
        return (React.createElement("div", { id: 'reportDetail-pc' },
            React.createElement("div", { className: 'reportDetail' },
                React.createElement("div", { className: 'report-title' }, reportDetail.title),
                React.createElement("div", { className: 'img-box' },
                    React.createElement("img", { src: reportDetail.imgContentUrl })))));
    };
    return ReportDetail_PC;
}(React.Component));
export default ReportDetail_PC;
//# sourceMappingURL=main-pc.js.map