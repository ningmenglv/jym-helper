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
var ListDetil_M = /** @class */ (function (_super) {
    __extends(ListDetil_M, _super);
    function ListDetil_M(props) {
        return _super.call(this, props) || this;
    }
    ListDetil_M.prototype.createHtml = function () {
        return { __html: this.props.content };
    };
    ListDetil_M.prototype.render = function () {
        var title = this.props.title;
        return (React.createElement("div", { id: "listDetail-m" },
            React.createElement("h2", { className: "title" }, title),
            React.createElement("div", { className: "content", dangerouslySetInnerHTML: this.createHtml() })));
    };
    return ListDetil_M;
}(React.Component));
export default ListDetil_M;
//# sourceMappingURL=main-m.js.map