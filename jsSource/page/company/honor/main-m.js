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
import { InfiniteLoader, LoadMore, Gallery } from "react-weui";
import Img from "@/component/img/img";
import "./style-m.less";
var Honor_M = /** @class */ (function (_super) {
    __extends(Honor_M, _super);
    function Honor_M(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            style: {},
            conWidth: 1.88,
            conHeight: 2.46,
            unit: "rem",
            showSingle: false,
            defaultIndex: 0
        };
        return _this;
    }
    Honor_M.prototype.render = function () {
        var _this = this;
        var state = this.state;
        var props = this.props;
        var srclist = [];
        srclist = props.honorList.map(function (item, index) {
            return srclist.concat(item.imgUrl);
        });
        return (React.createElement("div", { id: "honor-m" },
            React.createElement(InfiniteLoader, { loaderDefaultIcon: React.createElement(LoadMore, { showLine: true }, "\u6CA1\u6709\u6570\u636E\u4E86"), onLoadMore: function (resolve, finish) {
                    props.getHonorList(props.pageIndex + 1, resolve, finish);
                } },
                React.createElement("ul", null, props.honorList.map(function (item, index) {
                    return (React.createElement("li", { key: index },
                        React.createElement("div", { className: "imgCon", onClick: function (e) {
                                return _this.setState({ showSingle: true, defaultIndex: index });
                            } },
                            React.createElement(Img, { rate: 1, style: state.style, conWidth: state.conWidth, conHeight: state.conHeight, unit: state.unit, src: item.imgUrl })),
                        React.createElement("p", { className: "title" }, item.title)));
                })),
                React.createElement(Gallery, { src: srclist, show: state.showSingle, defaultIndex: state.defaultIndex },
                    React.createElement("span", { className: "close", onClick: function (e) { return _this.setState({ showSingle: false }); } }, "X")))));
    };
    return Honor_M;
}(React.Component));
export default Honor_M;
//# sourceMappingURL=main-m.js.map