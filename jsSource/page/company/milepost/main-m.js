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
var Milepost_M = /** @class */ (function (_super) {
    __extends(Milepost_M, _super);
    function Milepost_M(props) {
        return _super.call(this, props) || this;
    }
    Milepost_M.prototype.render = function () {
        var props = this.props;
        return (React.createElement("div", { id: "milepost-m" },
            React.createElement("ul", { className: "schedule" }, props.mileList.map(function (item, index) {
                return (React.createElement("li", { key: index },
                    React.createElement("div", { className: "date" }, item.time),
                    React.createElement("div", { className: "desc" }, item.desc),
                    React.createElement("div", { className: "line" })));
            }))));
    };
    return Milepost_M;
}(React.Component));
export default Milepost_M;
//# sourceMappingURL=main-m.js.map