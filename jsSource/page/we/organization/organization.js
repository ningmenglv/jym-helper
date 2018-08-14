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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from "react";
import Organization_PC from "./main-pc";
import Organization_M from "./main-m";
import Layout from "../../layout";
import Data from "./data";
import { UTIL } from "@/service/util2";
var OrganizationPage = /** @class */ (function (_super) {
    __extends(OrganizationPage, _super);
    function OrganizationPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = Data;
        return _this;
    }
    OrganizationPage.prototype.render = function () {
        var state = this.state;
        var isM = UTIL.DeviceJudge.isM();
        return (React.createElement("div", { id: "organization-page" }, isM ? React.createElement(Organization_M, __assign({}, state)) : React.createElement(Organization_PC, __assign({}, state))));
    };
    return OrganizationPage;
}(React.Component));
export default OrganizationPage;
Layout(OrganizationPage, {
    typeIndex: 1,
    activeIndex: 0,
    title: "组织信息",
    status: true
});
//# sourceMappingURL=organization.js.map