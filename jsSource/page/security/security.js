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
import React from "react";
import Layout from "../layout";
import Security_M from "./main-m";
import Security_PC from "./main-pc";
import securityList from "./data";
import { UTIL } from "@/service/util2";
var SecurityPage = /** @class */ (function (_super) {
    __extends(SecurityPage, _super);
    function SecurityPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = securityList;
        return _this;
    }
    SecurityPage.prototype.render = function () {
        var isM = UTIL.DeviceJudge.isM();
        return (React.createElement("div", { id: "security-page" }, isM ? React.createElement(Security_M, __assign({}, this.state)) : React.createElement(Security_PC, __assign({}, this.state))));
    };
    return SecurityPage;
}(React.Component));
Layout(SecurityPage, {
    typeIndex: 3,
    activeIndex: 0,
    title: "安全保障",
    status: true
});
//# sourceMappingURL=security.js.map