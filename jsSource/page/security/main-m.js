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
var Security_M = /** @class */ (function (_super) {
    __extends(Security_M, _super);
    function Security_M() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Security_M.prototype.render = function () {
        var props = this.props;
        return (React.createElement("div", { id: "security-m" },
            React.createElement("ul", null, props.securityList.map(function (item, index) {
                return (React.createElement("li", { key: index },
                    React.createElement("h2", null, item.title),
                    item.content.map(function (subItem, subIndex) {
                        return (React.createElement("div", { className: "subContent", key: subIndex },
                            React.createElement("h3", null, subItem.subTitle),
                            React.createElement("div", { className: "desc" }, subItem.desc)));
                    })));
            }))));
    };
    return Security_M;
}(React.Component));
export default Security_M;
//# sourceMappingURL=main-m.js.map