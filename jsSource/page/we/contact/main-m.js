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
import "./style-m.less";
var Contact_M = /** @class */ (function (_super) {
    __extends(Contact_M, _super);
    function Contact_M() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contact_M.prototype.render = function () {
        var contactList = this.props.contactList;
        console.log(contactList);
        return (React.createElement("div", { id: "conteact-m" },
            contactList.map(function (item, index) {
                return item.show && (React.createElement("div", { className: "item", key: index },
                    React.createElement("h2", null, item.title),
                    item.infoList.map(function (info, index) {
                        return (React.createElement("p", { key: index },
                            info.infoTitle,
                            "\uFF1A",
                            info.info,
                            info.href));
                    })));
            }),
            React.createElement("div", { className: "img-box" },
                React.createElement("img", { className: "img", src: require("./images/map_jym.jpg") }))));
    };
    return Contact_M;
}(React.Component));
export default Contact_M;
//# sourceMappingURL=main-m.js.map