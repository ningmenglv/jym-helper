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
import Cell from "@/component/cell/cell";
import { UTIL } from "@/service/util2";
import { Pagination } from "antd";
import "antd/lib/pagination/style";
import "./style-pc.less";
var itemRender = function (current, type, originalElement) {
    if (type === "prev") {
        return React.createElement("a", null, "◀ 上一页");
    }
    if (type === "next") {
        return React.createElement("a", null, "下一页 ▶");
    }
    return originalElement;
};
var Law_PC = /** @class */ (function (_super) {
    __extends(Law_PC, _super);
    function Law_PC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Law_PC.prototype.render = function () {
        var _this = this;
        var _a = this.props, lawList = _a.lawList, totalCount = _a.totalCount, pageSize = _a.pageSize, pageIndex = _a.pageIndex, totalPageCount = _a.totalPageCount;
        if (!this.props.hasOwnProperty("lawList"))
            return null;
        return (React.createElement("div", { id: "Law-pc", className: "page-pc" },
            lawList.map(function (item, index) { return (React.createElement(Cell, { key: index, data: {
                    link: item.fileUrl,
                    guid: item.guid,
                    info: "发布时间: " + UTIL.Time.pareseTime(item.releaseTime, false),
                    title: item.title
                } })); }),
            totalPageCount !== 1 && (React.createElement("div", { className: "jym-pagination" },
                React.createElement(Pagination, { defaultCurrent: 1, current: pageIndex, total: totalCount, pageSize: pageSize, itemRender: itemRender, onChange: function (index) { return _this.handlerRequest(index); } })))));
    };
    // 发送请求
    Law_PC.prototype.handlerRequest = function (index) {
        this.props.getLawList(index);
    };
    return Law_PC;
}(React.Component));
export default Law_PC;
//# sourceMappingURL=main-pc.js.map