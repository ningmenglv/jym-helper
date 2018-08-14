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
import './style-pc.less';
var Charge_PC = /** @class */ (function (_super) {
    __extends(Charge_PC, _super);
    function Charge_PC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Charge_PC.prototype.render = function () {
        var props = this.props;
        console.log(props);
        return (React.createElement("div", { id: "charge-pc" },
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { className: 'th-l' }, "\u4E1A\u52A1\u7C7B\u578B"),
                        React.createElement("th", { className: 'th-r' }, "\u8D44\u8D39\u6807\u51C6"))),
                React.createElement("tbody", null, props.chargeList.map(function (item, index) {
                    return (item.section.map(function (subItem, subIndex) {
                        return (React.createElement("tr", { key: subIndex },
                            React.createElement("td", { className: 'td-l' }, subItem.type),
                            React.createElement("td", { className: 'td-r' }, subItem.desc)));
                    }));
                })))));
    };
    return Charge_PC;
}(React.Component));
export default Charge_PC;
//# sourceMappingURL=main-pc.js.map