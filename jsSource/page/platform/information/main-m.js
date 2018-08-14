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
import miment from "miment";
import "./style-m";
var Information_M = /** @class */ (function (_super) {
    __extends(Information_M, _super);
    function Information_M() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Information_M.prototype.render = function () {
        var _a = this.props.infomation, num_Purchase = _a.num_Purchase, operating_days = _a.operating_days, operationList = _a.operationList, register_Person = _a.register_Person, transactionAmount = _a.transactionAmount;
        var yesterday = miment()
            .add(-1, "DD")
            .format("YYYY年MM月DD日");
        operating_days = miment()
            .distance(new Date(2013, 8, 27).getTime())
            .format("YYYY年MM个月DD天", true);
        return (React.createElement("div", { id: "information-m" },
            React.createElement("div", { className: "operational-data" },
                React.createElement("div", null, operating_days),
                React.createElement("div", null,
                    "\u622A\u6B62",
                    yesterday),
                React.createElement("div", null,
                    "221\u4EBF\u5143",
                    transactionAmount),
                React.createElement("div", null,
                    "\u622A\u6B62",
                    yesterday),
                React.createElement("div", null,
                    register_Person,
                    "\u4EBA"),
                React.createElement("div", null,
                    "\u622A\u6B62",
                    yesterday),
                React.createElement("div", null,
                    num_Purchase,
                    "\u671F")),
            React.createElement("div", { className: "loan" },
                React.createElement("div", { className: "title" },
                    React.createElement("span", { className: "title-left" }, "\u501F\u8D37\u4FE1\u606F"),
                    React.createElement("span", { className: "title-right" },
                        "(\u6570\u636E\u622A\u81F3",
                        operationList.dataEndTime,
                        ")")),
                React.createElement("ul", null, operationList.loan.map(function (item, index) {
                    return (React.createElement("li", { key: index },
                        React.createElement("span", { className: "key" }, item.gargetName),
                        React.createElement("span", { className: "value" }, item.reportedContent)));
                }))),
            React.createElement("div", { className: "loan" },
                React.createElement("div", { className: "title" },
                    React.createElement("span", { className: "title-left" }, "\u501F\u6B3E\u4EBA\u4E0E\u51FA\u501F\u4EBA\u4FE1\u606F"),
                    React.createElement("span", { className: "title-right" },
                        "(\u6570\u636E\u622A\u81F3",
                        operationList.dataEndTime,
                        ")")),
                React.createElement("ul", null, operationList.lender.map(function (item, index) {
                    return (React.createElement("li", { key: index },
                        React.createElement("span", { className: "key" }, item.gargetName),
                        React.createElement("span", { className: "value" }, item.reportedContent)));
                }))),
            React.createElement("div", { className: "loan" },
                React.createElement("div", { className: "title" },
                    React.createElement("span", { className: "title-left" }, "\u903E\u671F\u4FE1\u606F"),
                    React.createElement("span", { className: "title-right" },
                        "(\u6570\u636E\u622A\u81F3",
                        operationList.dataEndTime,
                        ")")),
                React.createElement("ul", null, operationList.overdue.map(function (item, index) {
                    return (React.createElement("li", { key: index },
                        React.createElement("span", { className: "key" }, item.gargetName),
                        React.createElement("span", { className: "value" }, item.reportedContent)));
                }))),
            React.createElement("div", { className: "loan compensatory" },
                React.createElement("div", { className: "title" },
                    React.createElement("span", { className: "title-left" }, "\u4EE3\u507F\u4FE1\u606F"),
                    React.createElement("span", { className: "title-right" },
                        "(\u6570\u636E\u622A\u81F3",
                        operationList.dataEndTime,
                        ")")),
                React.createElement("ul", null, operationList.compensatory.map(function (item, index) {
                    return (React.createElement("li", { key: index },
                        React.createElement("span", { className: "key" }, item.gargetName),
                        React.createElement("span", { className: "value" }, item.reportedContent)));
                })))));
    };
    return Information_M;
}(React.Component));
export default Information_M;
//# sourceMappingURL=main-m.js.map