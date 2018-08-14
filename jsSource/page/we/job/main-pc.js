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
var JobPage_PC = /** @class */ (function (_super) {
    __extends(JobPage_PC, _super);
    function JobPage_PC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showList: []
        };
        return _this;
    }
    // 全部关闭
    JobPage_PC.prototype.componentWillReceiveProps = function (nextProps) {
        var jobList = nextProps.jobList;
        this.setState({
            showList: jobList.map(function (item) { return false; })
        });
    };
    JobPage_PC.prototype.render = function () {
        var _this = this;
        var _a = this.props, jobList = _a.jobList, totalPageCount = _a.totalPageCount, pageIndex = _a.pageIndex, totalCount = _a.totalCount, pageSize = _a.pageSize;
        var showList = this.state.showList;
        return (React.createElement("div", { id: "jobPage-pc", className: "page-pc" },
            React.createElement("div", { className: "job-hd" },
                React.createElement("h2", null, "\u62DB\u8D24\u7EB3\u58EB"),
                React.createElement("p", null, "\u6211\u4EEC\u662F\u4E00\u652F\u5E74\u8F7B\u7684\u56E2\u961F\uFF012\u4E2A\u6708\u4EA7\u54C1\u4E0A\u7EBF\uFF0C56\u5929\u603B\u6210\u4EA4\u989D\u7834\u4EBF\uFF01"),
                React.createElement("p", null, "\u6211\u4EEC\u662F\u4E00\u652F\u7ECF\u9A8C\u4E30\u5BCC\u7684\u56E2\u961F!\u6C47\u96C6\u4E86\u5728\u817E\u8BAF\u3001\u963F\u91CC\u3001\u5FAE\u8F6F\u548C\u56FD\u6709\u8BC1\u5238\u516C\u53F8\u7B49\u4ECE\u4E1A\u5341\u4F59\u5E74\u7684\u4E92\u8054\u7F51\u91D1\u878D\u7CBE\u82F1\uFF01"),
                React.createElement("p", null, "\u6211\u4EEC\u662F\u4E00\u652F\u6C38\u4E0D\u505C\u606F\u7684\u56E2\u961F\uFF1A\u4E0D\u65AD\u65B0\u589E\u7684\u4E1A\u52A1\uFF0C\u4E0D\u65AD\u4F18\u5316\u7684\u754C\u9762\uFF0C\u4E0D\u65AD\u4E30\u5BCC\u7684\u529F\u80FD\uFF0C\u4E00\u5207\u90FD\u53EA\u4E3A\u6781\u81F4\u4E0D\u59A5\u534F\uFF01"),
                React.createElement("p", null, "\u82E5\u6709\u5E78\u80FD\u4E0E\u60A8\u4E00\u8D77\u521B\u4E1A\uFF0C\u60A8\u5C06\u83B7\u5F97\u4E0D\u9519\u7684\u85AA\u8D44\u548C\u6BD4\u8F83\u591A\u7684\u671F\u6743\uFF0C\u7ECF\u5E38\u6027\u7684\u5458\u5DE5\u6D3B\u52A8\u548C\u5168\u65B9\u9762\u7684\u5065\u5EB7\u68C0\u67E5\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u81EA\u7531\u3001\u5F00\u653E\u3001\u6241\u5E73\u7684\u56E2\u961F\u3002"),
                React.createElement("p", null, "\u5982\u679C\u4F60\u8DDF\u6211\u4EEC\u4E00\u6837\uFF0C\u60F3\u901A\u8FC7\u81EA\u5DF1\u7684\u52AA\u529B\uFF0C\u6539\u53D8\u5927\u4F17\u7684\u7406\u8D22\u751F\u6D3B\uFF0C\u8BA9\u201C\u666E\u60E0\u91D1\u878D\u201D\u60E0\u53CA\u66F4\u591A\u7684\u4EBA\uFF0C\u4E0D\u8981\u8FDF\u7591\uFF0C\u5FEB\u6765\u52A0\u5165\u6211\u4EEC\u5427\uFF01"),
                React.createElement("p", null,
                    "\u7B80\u5386\u8BF7\u6295\u9012\u81F3\uFF1A",
                    React.createElement("a", { href: "mailto:hr@jinyinmao.com.cn", target: "_blanket" }, "hr@jinyinmao.com.cn"))),
            React.createElement("div", { className: "job-list" },
                jobList.map(function (item, index) { return (React.createElement("div", { className: "list-container", key: index },
                    React.createElement(Cell, { data: {
                            info: "发布时间: " +
                                UTIL.Time.pareseTime(item.releaseTime, false),
                            title: item.title
                        }, onClick: _this.showInfo.bind(_this, index) }),
                    React.createElement("div", { className: "list-info" + (showList[index] ? "" : " hiden") },
                        React.createElement("div", { className: "info-tag" }, "\u5C97\u4F4D\u804C\u8D23\uFF1A"),
                        React.createElement("div", { dangerouslySetInnerHTML: { __html: item.duties } }),
                        React.createElement("div", { className: "info-tag" }, "\u5C97\u4F4D\u8981\u6C42\uFF1A"),
                        React.createElement("div", { dangerouslySetInnerHTML: { __html: item.requirement } })))); }),
                totalPageCount !== 1 && (React.createElement("div", { className: "jym-pagination" },
                    React.createElement(Pagination, { defaultCurrent: 1, current: pageIndex, total: totalCount, pageSize: pageSize, itemRender: itemRender, onChange: function (index) { return _this.handlerRequest(index); } }))))));
    };
    // 发送请求
    JobPage_PC.prototype.handlerRequest = function (index) {
        this.props.getJobList(index);
    };
    // 展示info
    JobPage_PC.prototype.showInfo = function (index) {
        var showList = this.state.showList;
        var newList = Array.prototype.slice.call(showList);
        newList[index] = !newList[index];
        this.setState({
            showList: newList
        });
    };
    return JobPage_PC;
}(React.Component));
export default JobPage_PC;
//# sourceMappingURL=main-pc.js.map