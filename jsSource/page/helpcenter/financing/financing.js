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
import Layout from "../../layout";
var FinancingPage = /** @class */ (function (_super) {
    __extends(FinancingPage, _super);
    function FinancingPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinancingPage.prototype.render = function () {
        return React.createElement("div", { id: "financing-page" }, "FinancingPage");
    };
    return FinancingPage;
}(React.Component));
Layout(FinancingPage, {
    typeIndex: 7,
    activeIndex: 0,
    title: "喵喵课堂",
    status: true
});
//# sourceMappingURL=financing.js.map