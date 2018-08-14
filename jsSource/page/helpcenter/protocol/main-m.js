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
import { InfiniteLoader, LoadMore } from "react-weui";
import "./style-m.less";
var Protocol_M = /** @class */ (function (_super) {
    __extends(Protocol_M, _super);
    function Protocol_M(props) {
        return _super.call(this, props) || this;
    }
    Protocol_M.prototype.render = function () {
        var props = this.props;
        return (React.createElement("div", { id: "protocol-m" },
            React.createElement(InfiniteLoader, { loaderDefaultIcon: React.createElement(LoadMore, { showLine: true }, "\u6CA1\u6709\u6570\u636E\u4E86"), onLoadMore: function (resolve, finish) {
                    props.getProtocolList(props.pageIndex + 1, resolve, finish);
                } },
                React.createElement("ul", { className: "protocolList" }, props.protocolList.length > 0 &&
                    props.protocolList.map(function (item, index) { return (React.createElement("li", { key: index },
                        React.createElement("a", { className: "item", href: "/html/helpcenter/listDetail.html?guid=" + item.guid },
                            React.createElement("span", { className: "title" }, item.title),
                            React.createElement("span", { className: "arrow" })))); })))));
    };
    return Protocol_M;
}(React.Component));
export default Protocol_M;
//# sourceMappingURL=main-m.js.map