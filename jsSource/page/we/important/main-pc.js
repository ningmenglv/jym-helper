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
import * as React from 'react';
import './style-pc.less';
var Important_PC = /** @class */ (function (_super) {
    __extends(Important_PC, _super);
    function Important_PC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Important_PC.prototype.render = function () {
        var importantInfoList = this.props.importantInfoList;
        console.log(importantInfoList);
        return (React.createElement("div", { id: 'important-pc', className: 'page-pc' },
            React.createElement("div", { className: 'section' },
                React.createElement("table", { className: 'tableBox' },
                    React.createElement("tbody", null, importantInfoList.map(function (item, index) {
                        var outLength = item.out.length;
                        return (React.createElement("tr", { key: index },
                            React.createElement("td", { className: 'td-l' }, item.main),
                            React.createElement("td", { className: "" + (outLength > 5 ? 'td' : 'td-r') }, item.out)));
                    }))))));
    };
    return Important_PC;
}(React.Component));
export default Important_PC;
//# sourceMappingURL=main-pc.js.map