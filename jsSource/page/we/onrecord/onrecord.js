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
import * as React from "react";
import Onrecord_PC from "./main-pc";
import Onrecord_M from "./main-m";
import Layout from "../../layout";
import { UTIL } from "@/service/util2";
var OnrecordPage = /** @class */ (function (_super) {
    __extends(OnrecordPage, _super);
    function OnrecordPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnrecordPage.prototype.render = function () {
        var isM = UTIL.DeviceJudge.isM();
        return (React.createElement("div", { id: "onrecord-page" }, isM ? React.createElement(Onrecord_M, null) : React.createElement(Onrecord_PC, null)));
    };
    return OnrecordPage;
}(React.Component));
Layout(OnrecordPage, {
    typeIndex: 1,
    activeIndex: 0,
    title: "备案信息",
    status: true
});
//# sourceMappingURL=onrecord.js.map