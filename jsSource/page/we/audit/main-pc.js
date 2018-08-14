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
import * as React from 'react';
import './style-pc.less';
var Audit_Pc = /** @class */ (function (_super) {
    __extends(Audit_Pc, _super);
    function Audit_Pc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Audit_Pc.prototype.render = function () {
        var auditList = this.props.auditList;
        return (React.createElement("div", { id: "audit-pc", className: "page-pc" },
            React.createElement("div", { className: "auditImg" },
                React.createElement("img", { src: require("./imgs/audit.png") })),
            auditList.map(function (item, index) { return (React.createElement("div", { className: "result", key: index },
                React.createElement("p", null,
                    item.title,
                    "\uFF1A",
                    item.info))); })));
    };
    return Audit_Pc;
}(React.Component));
export default Audit_Pc;
//# sourceMappingURL=main-pc.js.map