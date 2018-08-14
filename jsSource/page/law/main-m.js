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
var Law_M = /** @class */ (function (_super) {
    __extends(Law_M, _super);
    function Law_M(props) {
        return _super.call(this, props) || this;
    }
    Law_M.prototype.render = function () {
        var props = this.props;
        return (React.createElement("div", { id: "law-m" },
            React.createElement(InfiniteLoader, { loaderDefaultIcon: React.createElement(LoadMore, { showLine: true }, "\u6CA1\u6709\u6570\u636E\u4E86"), onLoadMore: function (resolve, finish) {
                    props.getLawList(props.pageIndex + 1, resolve, finish);
                } },
                React.createElement("ul", { className: "lawList" }, props.lawList.length > 0 &&
                    props.lawList.map(function (item, index) { return (React.createElement("li", { key: index },
                        React.createElement("a", { className: "item", href: item.fileUrl, target: "_blank" },
                            React.createElement("span", { className: "title" }, item.title),
                            React.createElement("span", { className: "arrow" })))); })))));
    };
    return Law_M;
}(React.Component));
export default Law_M;
//# sourceMappingURL=main-m.js.map