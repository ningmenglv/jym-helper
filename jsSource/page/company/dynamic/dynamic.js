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
var DynamicPage = /** @class */ (function (_super) {
    __extends(DynamicPage, _super);
    function DynamicPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynamicPage.prototype.render = function () {
        return React.createElement("div", { id: "dynamic-page" }, "DynamicPage");
    };
    return DynamicPage;
}(React.Component));
Layout(DynamicPage, {
    typeIndex: 6,
    activeIndex: 0,
    title: "喵喵动态",
    status: true
});
//# sourceMappingURL=dynamic.js.map