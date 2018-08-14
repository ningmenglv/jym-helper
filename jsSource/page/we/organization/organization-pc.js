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
var Organization_PC = /** @class */ (function (_super) {
    __extends(Organization_PC, _super);
    function Organization_PC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Organization_PC.prototype.render = function () {
        console.log(this.props);
        return (React.createElement("div", { id: "organization-pc" }, "Pc"));
    };
    return Organization_PC;
}(React.Component));
export default Organization_PC;
//# sourceMappingURL=organization-pc.js.map