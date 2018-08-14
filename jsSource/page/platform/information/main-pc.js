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
import * as React from "react";
import "./style-pc.less";
import { UTIL } from "@/service/util2";
var Information_PC = /** @class */ (function (_super) {
    __extends(Information_PC, _super);
    function Information_PC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Information_PC.prototype.render = function () {
        var _a = this.props.infomation, transactionAmount = _a.transactionAmount, // 交易总额
        num_Purchase = _a.num_Purchase, // 项目总期数
        register_Person = _a.register_Person, // 用户人数
        operationList = _a.operationList;
        var parseAmount = UTIL.Money.parseAmount;
        return (React.createElement("div", { id: "information-pc" },
            React.createElement("ul", { className: "dataList" },
                React.createElement("li", { className: "lt" },
                    React.createElement("div", { className: "list-container" },
                        React.createElement("div", { className: "num" },
                            React.createElement("span", null, parseAmount(register_Person, 0))),
                        React.createElement("div", { className: "des" }, "\u7528\u6237\u4EBA\u6570(\u4EBA)"),
                        React.createElement("i", { className: "iconfont icon-xiugaitouxiang" }))),
                React.createElement("li", { className: "md" },
                    React.createElement("div", { className: "list-container" },
                        React.createElement("div", { className: "num" },
                            React.createElement("span", null, parseAmount(transactionAmount, 0))),
                        React.createElement("div", { className: "des" }, "\u4EA4\u6613\u603B\u989D\uFF08\u5143\uFF09"),
                        React.createElement("i", { className: "iconfont icon-jinbi" }))),
                React.createElement("li", { className: "gt" },
                    React.createElement("div", { className: "list-container" },
                        React.createElement("div", { className: "num" },
                            React.createElement("span", null,
                                " ",
                                parseAmount(num_Purchase, 0),
                                " ")),
                        React.createElement("div", { className: "des" }, "\u9879\u76EE\u603B\u671F\u6570\uFF08\u671F\uFF09"),
                        React.createElement("i", { className: "iconfont icon-trend" })))),
            React.createElement("div", { className: "information-main" },
                React.createElement("section", { className: "section" },
                    React.createElement("h2", { className: "title" },
                        React.createElement("span", { className: "split-line line-left" }),
                        "\u501F\u8D37\u4FE1\u606F",
                        React.createElement("span", { className: "split-line line-right" })),
                    React.createElement("p", { className: "desc" },
                        "\u6570\u636E\u622A\u81F3",
                        operationList.dataEndTime),
                    React.createElement("ul", { className: "module" }, operationList.loan.map(function (item, key) { return (React.createElement("li", { key: key },
                        React.createElement("div", { className: "count" }, item.reportedContent),
                        React.createElement("div", { className: "type" }, item.gargetName))); }))),
                React.createElement("section", { className: "section" },
                    React.createElement("h2", { className: "title" },
                        React.createElement("span", { className: "split-line line-left" }),
                        "\u501F\u6B3E\u4EBA\u4E0E\u51FA\u501F\u4EBA\u4FE1\u606F",
                        React.createElement("span", { className: "split-line line-right" })),
                    React.createElement("p", { className: "desc" },
                        "\u6570\u636E\u622A\u81F3",
                        operationList.dataEndTime),
                    React.createElement("ul", { className: "module" }, operationList.lender.map(function (item, key) { return (React.createElement("li", { key: key },
                        React.createElement("div", { className: "count" }, item.reportedContent),
                        React.createElement("div", { className: "type" }, item.gargetName))); }))),
                React.createElement("section", { className: "section" },
                    React.createElement("h2", { className: "title" },
                        React.createElement("span", { className: "split-line line-left" }),
                        "\u903E\u671F\u4FE1\u606F",
                        React.createElement("span", { className: "split-line line-right" })),
                    React.createElement("p", { className: "desc" },
                        "\u6570\u636E\u622A\u81F3",
                        operationList.dataEndTime),
                    React.createElement("ul", { className: "module" }, operationList.overdue.map(function (item, key) { return (React.createElement("li", { key: key },
                        React.createElement("div", { className: "count" }, item.reportedContent),
                        React.createElement("div", { className: "type" }, item.gargetName))); }))),
                React.createElement("section", { className: "section" },
                    React.createElement("h2", { className: "title" },
                        React.createElement("span", { className: "split-line line-left" }),
                        "\u4EE3\u507F\u4FE1\u606F",
                        React.createElement("span", { className: "split-line line-right" })),
                    React.createElement("p", { className: "desc" },
                        "\u6570\u636E\u622A\u81F3",
                        operationList.dataEndTime),
                    React.createElement("ul", { className: "module" }, operationList.compensatory.map(function (item, key) { return (React.createElement("li", { key: key },
                        React.createElement("div", { className: "count" }, item.reportedContent),
                        React.createElement("div", { className: "type" }, item.gargetName))); }))))));
    };
    return Information_PC;
}(React.Component));
export default Information_PC;
//# sourceMappingURL=main-pc.js.map