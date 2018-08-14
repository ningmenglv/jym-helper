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
import Charge_M from "./main-m";
import Charge_PC from "./main-pc";
import { UTIL } from "@/service/util2";
import chargeList from "./data";
var ChargePage = /** @class */ (function (_super) {
    __extends(ChargePage, _super);
    function ChargePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = chargeList;
        return _this;
    }
    ChargePage.prototype.render = function () {
        var isM = UTIL.DeviceJudge.isM();
        var state = this.state;
        return (React.createElement("div", { id: "charge-page" }, isM ? React.createElement(Charge_M, __assign({}, state)) : React.createElement(Charge_PC, __assign({}, state))));
    };
    return ChargePage;
}(React.Component));
Layout(ChargePage, {
    typeIndex: 4,
    activeIndex: 0,
    title: "收费标准",
    status: true
});
//# sourceMappingURL=charge.js.map