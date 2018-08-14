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
import "./style-m";
var Important_M = /** @class */ (function (_super) {
    __extends(Important_M, _super);
    function Important_M() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Important_M.prototype.render = function () {
        var importantInfoList = this.props.importantInfoList;
        console.log(importantInfoList);
        return (React.createElement("div", { id: "important-m" }, importantInfoList.map(function (item, index) {
            var outLength = item.out;
            console.log(outLength.length);
            return (React.createElement("div", { className: "contant", key: index },
                React.createElement("div", { className: "leftContant" }, item.main),
                React.createElement("div", { className: outLength.length <= 5 ? "rightContantR" : "rightContantL" }, item.out)));
        })));
    };
    return Important_M;
}(React.Component));
export default Important_M;
//# sourceMappingURL=main-m.js.map