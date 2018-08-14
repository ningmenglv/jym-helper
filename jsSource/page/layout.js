var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "@/component/header/header";
import Toolbar from "@/component/toolbar/toolbar";
import Footer from "@/component/footer/footer";
import Nav from "@/component/nav/nav";
import "@/service/http";
//import react-weui styles
import "weui";
import "react-weui/build/packages/react-weui.css";
import "@/assets/style/global.less";
import { UTIL } from "../service/util2";
export default (function (Page, navState) {
    var isPC = !UTIL.DeviceJudge.isM();
    ReactDOM.render(React.createElement(Fragment, null,
        isPC && (React.createElement(Fragment, null,
            React.createElement(Header, null),
            React.createElement(Nav, __assign({}, navState)),
            React.createElement(Toolbar, null))),
        React.createElement(Page, null),
        isPC && React.createElement(Footer, null)), document.getElementById("root-app"));
});
//# sourceMappingURL=layout.js.map