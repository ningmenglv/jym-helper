import React from "react";
import Nav from "./nav";
import { Constant } from "@/constant";
var MaxHeader = function () {
    return (React.createElement("div", { className: "max-header" },
        React.createElement("div", { className: "container clearfix" },
            React.createElement("div", { className: "left-block" },
                React.createElement("div", { className: "lighten" }),
                React.createElement("img", { className: "logo", src: Constant.CDN_LINK + "/img/logo/logomax.png", onClick: function () { return window.location.href = Constant.hosts.WEB_WWW; } }),
                React.createElement("img", { className: "logodesc", src: Constant.CDN_LINK + "/img/logo/logodesc.png" })),
            React.createElement("div", { className: "right-block" },
                React.createElement(Nav, null)))));
};
export default MaxHeader;
//# sourceMappingURL=max-header.js.map