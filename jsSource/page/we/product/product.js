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
import ProductPage_PC from "./main-pc";
import ProductPage_M from "./main-m";
import Layout from "../../layout";
import { UTIL } from "@/service/util2";
var ProductPage = /** @class */ (function (_super) {
    __extends(ProductPage, _super);
    function ProductPage(props) {
        return _super.call(this, props) || this;
    }
    ProductPage.prototype.render = function () {
        var isM = UTIL.DeviceJudge.isM();
        return (React.createElement("div", { id: "productPage-page" }, isM ? React.createElement(ProductPage_M, null) : React.createElement(ProductPage_PC, null)));
    };
    return ProductPage;
}(React.Component));
export default ProductPage;
Layout(ProductPage, {
    typeIndex: 1,
    activeIndex: 0,
    title: "产品介绍",
    status: true
});
//# sourceMappingURL=product.js.map