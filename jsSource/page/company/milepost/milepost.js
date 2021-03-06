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
import Layout from "../../layout";
import { UTIL } from "@/service/util2";
import Milepost_M from "./main-m";
import Milepost_PC from "./main-pc";
import mileList from "./data";
var MilepostPage = /** @class */ (function (_super) {
    __extends(MilepostPage, _super);
    function MilepostPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = mileList;
        return _this;
    }
    MilepostPage.prototype.render = function () {
        var state = this.state;
        var isM = UTIL.DeviceJudge.isM();
        return (React.createElement("div", { id: "milepost-page" }, isM ? React.createElement(Milepost_M, __assign({}, state)) : React.createElement(Milepost_PC, __assign({}, state))));
    };
    return MilepostPage;
}(React.Component));
Layout(MilepostPage, {
    typeIndex: 6,
    activeIndex: 0,
    title: "里程碑",
    status: true
});
//# sourceMappingURL=milepost.js.map