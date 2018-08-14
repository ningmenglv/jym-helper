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
import Layout from "@/page/layout";
import { UTIL } from "@/service/util2";
import HomeData from "./data.yml";
import "./home.less";
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.componentWillMount = function () {
        var isM = UTIL.DeviceJudge.isM();
        if (!isM)
            location.href = "/html/we/organization.html";
    };
    HomePage.prototype.render = function () {
        return (React.createElement("div", { id: "home-page" }, HomeData.map(function (item, index) { return (React.createElement("div", { className: [2, 3, 4].indexOf(index) == -1 ? "section" : "section single", style: index === 5 ? { clear: "both" } : {}, key: item.title + index },
            React.createElement("h2", { className: "title" },
                React.createElement("span", { className: "line" }),
                item.title),
            React.createElement("ul", { className: "con" }, item.list.map(function (sub_item, i) { return (React.createElement("li", { key: sub_item.desc + i },
                React.createElement("a", { href: sub_item.href },
                    React.createElement("img", { className: "img", src: require("./images/" + sub_item.imgName + ".png"), alt: "sub_item.desc" }),
                    React.createElement("div", { className: "sub_title" }, sub_item.desc)))); })))); })));
    };
    return HomePage;
}(React.Component));
Layout(HomePage, {
    typeIndex: 1,
    activeIndex: 0,
    title: "信息披露",
    status: true
});
//# sourceMappingURL=home.js.map