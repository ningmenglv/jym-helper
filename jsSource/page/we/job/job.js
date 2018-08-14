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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from "react";
import Axios from 'axios';
import { Constant } from "@/constant";
import Layout from "../../layout";
import JobPage_PC from './main-pc';
var JobPage = /** @class */ (function (_super) {
    __extends(JobPage, _super);
    function JobPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            pageIndex: 1,
            pageSize: 10,
            totalPageCount: 1,
            jobList: []
        };
        return _this;
    }
    JobPage.prototype.componentWillMount = function () {
        this.requestRecruit(1);
    };
    JobPage.prototype.requestRecruit = function (pageIndex) {
        var _this = this;
        Axios.get(Constant.hosts.SERVER_OPER + "/api/Article/RecruitPaging", {
            params: {
                pageIndex: pageIndex,
                pageSize: this.state.pageSize
            }
        }).then(function (res) {
            var data = res.data;
            var jobList = data.items || [];
            _this.setState({
                pageIndex: pageIndex,
                jobList: jobList,
                totalCount: data.totalCount,
                totalPageCount: data.totalPageCount
            });
        });
    };
    JobPage.prototype.render = function () {
        var _this = this;
        var state = this.state;
        return (React.createElement("div", { id: "job-page" },
            React.createElement(JobPage_PC, __assign({}, state, { getJobList: function (index) { return _this.requestRecruit(index); } }))));
    };
    return JobPage;
}(React.Component));
Layout(JobPage, {
    typeIndex: 1,
    activeIndex: 0,
    title: "招贤纳士",
    status: true
});
//# sourceMappingURL=job.js.map