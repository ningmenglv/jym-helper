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
import "./style-m.less";
var Charge_M = /** @class */ (function (_super) {
    __extends(Charge_M, _super);
    function Charge_M() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Charge_M.prototype.render = function () {
        var props = this.props;
        return (React.createElement("div", { id: "charge-m" },
            React.createElement("div", { className: "charge_title" },
                React.createElement("span", { className: "left" }, "\u4E1A\u52A1\u7C7B\u578B"),
                React.createElement("span", { className: "right" }, "\u8D44\u8D39\u6807\u51C6")),
            props.chargeList.map(function (item, index) {
                return (React.createElement("ul", { className: "section", key: index }, item.section.map(function (subItem, subIndex) {
                    return (React.createElement("li", { key: subIndex },
                        React.createElement("span", { className: "left" }, subItem.type),
                        React.createElement("span", { className: "right" }, subItem.desc)));
                })));
            })));
    };
    return Charge_M;
}(React.Component));
export default Charge_M;
//# sourceMappingURL=main-m.js.map