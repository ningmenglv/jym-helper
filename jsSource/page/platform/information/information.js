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
import Axios from "axios";
import Layout from "../../layout";
import { Constant } from "@/constant";
import Information_PC from "./main-pc";
import Information_M from "./main-m";
import { UTIL } from "@/service/util2";
var InformationPage = /** @class */ (function (_super) {
    __extends(InformationPage, _super);
    function InformationPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            infomation: {
                operating_days: "",
                transactionAmount: "",
                num_Purchase: "",
                register_Person: "",
                operationList: {
                    dataEndTime: "",
                    loan: [],
                    lender: [],
                    overdue: [],
                    compensatory: [] // 代偿信息
                }
            }
        };
        return _this;
    }
    InformationPage.prototype.componentWillMount = function () {
        var _this = this;
        var requestDataList = this.requestDataList;
        var requestOperation = this.requestOperation;
        Promise.all([requestDataList(), requestOperation()]).then(function (_a) {
            var dataList = _a[0], operation = _a[1];
            operation.items.forEach(function (item) {
                item.reportedContent = UTIL.Money.parseAmount(Number(item.reportedContent), 0);
            });
            var items = operation.items;
            _this.setState({
                infomation: {
                    operating_days: dataList.operating_days,
                    transactionAmount: dataList.transactionAmount,
                    num_Purchase: dataList.num_Purchase,
                    register_Person: dataList.register_Person,
                    operationList: {
                        dataEndTime: operation.dataEndTime,
                        loan: [
                            items[0],
                            items[1],
                            items[2],
                            items[3],
                            items[4],
                            items[11],
                            items[12]
                        ],
                        lender: [
                            items[6],
                            items[8],
                            items[5],
                            items[7],
                            items[9],
                            items[10]
                        ],
                        overdue: [
                            items[13],
                            items[14],
                            items[15],
                            items[16],
                            items[19],
                            items[20]
                        ],
                        compensatory: [items[17], items[18]] // 代偿信息
                    }
                }
            });
        });
    };
    InformationPage.prototype.requestDataList = function () {
        return new Promise(function (resolve, reject) {
            Axios.get(Constant.hosts.SERVER_RPT + "/home/statistics.do").then(function (res) {
                if (res.status === 200) {
                    var data = res.data;
                    resolve(data);
                }
                else {
                    reject();
                }
            });
        });
    };
    InformationPage.prototype.requestOperation = function () {
        return new Promise(function (resolve, reject) {
            Axios.get(Constant.hosts.SERVER_OPER + "/api/Article/OperationData").then(function (res) {
                if (res.status === 200) {
                    var data = res.data;
                    resolve(data);
                }
                else {
                    reject();
                }
            });
        });
    };
    InformationPage.prototype.render = function () {
        var isM = UTIL.DeviceJudge.isM();
        var infomation = this.state.infomation;
        return (React.createElement("div", { id: "information-page" }, isM ? (React.createElement(Information_M, { infomation: infomation })) : (React.createElement(Information_PC, { infomation: infomation }))));
    };
    return InformationPage;
}(React.Component));
Layout(InformationPage, {
    typeIndex: 8,
    activeIndex: 0,
    title: "平台数据报告",
    status: true
});
//# sourceMappingURL=information.js.map