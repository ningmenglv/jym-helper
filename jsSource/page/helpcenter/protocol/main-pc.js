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
import "antd/lib/pagination/style";
import "./style-pc.less";
var Protocol_PC = /** @class */ (function (_super) {
    __extends(Protocol_PC, _super);
    function Protocol_PC(props) {
        return _super.call(this, props) || this;
    }
    Protocol_PC.prototype.render = function () {
        return (React.createElement("div", { id: "protocol-pc", className: "page-pc" }, "protocol-pc"));
    };
    return Protocol_PC;
}(React.Component));
export default Protocol_PC;
//# sourceMappingURL=main-pc.js.map