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
var ProductPage_PC = /** @class */ (function (_super) {
    __extends(ProductPage_PC, _super);
    function ProductPage_PC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductPage_PC.prototype.render = function () {
        return (React.createElement("div", { id: "productPage-pc", className: "page-pc" },
            React.createElement("ul", { className: "product-list" },
                React.createElement("li", null,
                    React.createElement("h2", { className: "title" }, "\u4F59\u989D\u732B"),
                    React.createElement("p", null, "\u4F59\u989D\u732B\u662F\u4E00\u6B3E\u7ECF\u7528\u6237\u6388\u6743\u7684\u64CD\u4F5C\u5DE5\u5177\u3002\u7528\u6237\u6295\u8D44\u65F6\uFF0C\u81EA\u52A8\u4E3A\u7528\u6237\u5339\u914D\u4F18\u8D28\u7684\u501F\u6B3E\u9879\u76EE\uFF1B\u7528\u6237\u7533\u8BF7\u8D4E\u56DE\u65F6\uFF0C\u4E3A\u7528\u6237\u8F6C\u8BA9\u503A\u6743\u3002\u7531\u627F\u5151\u6C47\u7968\u4F5C\u4E3A\u6700\u7EC8\u8FD8\u6B3E\u4FDD\u969C\uFF0C\u517C\u987E\u6536\u76CA\u548C\u7075\u6D3B\u6027\u3002")),
                React.createElement("li", null,
                    React.createElement("h2", { className: "title" }, "\u94F6\u4F01\u4F17\u76C8"),
                    React.createElement("p", null, "\u4F01\u4E1A\u6301\u6709\u7531\u94F6\u884C\u51FA\u5177\u7684\u672A\u5230\u671F\u5151\u4ED8\u51ED\u8BC1\u5373\u94F6\u884C\u627F\u5151\u6C47\u7968\u4F5C\u4E3A\u6700\u7EC8\u8FD8\u6B3E\u4FDD\u8BC1\uFF0C\u901A\u8FC7\u91D1\u94F6\u732B\u5E73\u53F0\u5411\u6295\u8D44\u4EBA\u501F\u6B3E\uFF0C\u4EE5\u5B9E\u73B0\u878D\u8D44\u3002\u6700\u4F4E1\u5143\u8D77\u6295\uFF0C\u5230\u671F\u7531\u94F6\u884C\u521A\u6027\u5151\u4ED8\uFF0C\u5151\u4ED8\u6B3E\u4F5C\u4E3A\u6295\u8D44\u8005\u672C\u606F\u7684\u8FD8\u6B3E\u6765\u6E90\uFF0C\u6536\u76CA\u9AD8\u4E8E\u94F6\u884C\u540C\u671F\u7406\u8D22\u4EA7\u54C1\u3002")),
                React.createElement("li", null,
                    React.createElement("h2", { className: "title" }, "\u5546\u878D\u4FDD\u76C8"),
                    React.createElement("p", null, "\u662F\u91D1\u94F6\u732B\u4E3A\u5927\u578B\u4F01\u4E1A\u6216\u4FE1\u7528\u4F18\u8D28\u4F01\u4E1A\u878D\u8D44\u63A8\u51FA\u7684\u677F\u5757\uFF0C\u201C\u5546\u878D\u201D\u9488\u5BF9\u4F01\u4E1A\u7AEF\uFF0C\u91D1\u94F6\u732B\u65E8\u5728\u4E3A\u4F01\u4E1A\u63D0\u4F9B\u5FEB\u6377\u7684\u878D\u8D44\u6E20\u9053\uFF1B\u201C\u4FDD\u76C8\u201D\u9488\u5BF9\u6295\u8D44\u7AEF\uFF0C\u65E8\u5728\u4E3A\u6295\u8D44\u8005\u63D0\u4F9B\u5B89\u5168\u3001\u9AD8\u6536\u76CA\u7684\u7406\u8D22\u9009\u62E9\u3002\u8BE5\u677F\u5757\u878D\u8D44\u9879\u76EE\u7684\u62C5\u4FDD\u65B9\u4E3A\u56FD\u4F01\u3001\u592E\u4F01\u3001\u5927\u578B\u4E0A\u5E02\u516C\u53F8\u3001\u5927\u578B\u96C6\u56E2\u4F01\u4E1A\u3001\u94F6\u884C\u6216\u8D44\u4FE1\u826F\u597D\u7684\u62C5\u4FDD\u516C\u53F8\uFF0C\u91D1\u94F6\u732B\u5728\u4E25\u683C\u5BA1\u6838\u878D\u8D44\u4F01\u4E1A\u548C\u62C5\u4FDD\u65B9\u8D44\u8D28\u540E\uFF0C\u878D\u8D44\u4F01\u4E1A\u901A\u8FC7\u91D1\u94F6\u732B\u5E73\u53F0\u76F4\u63A5\u5411\u6295\u8D44\u4EBA\u501F\u6B3E\uFF0C\u82E5\u4F01\u4E1A\u4E0D\u80FD\u6309\u65F6\u6216\u5168\u989D\u8FD8\u6B3E\uFF0C\u5C06\u7531\u62C5\u4FDD\u65B9\u4EE3\u4E3A\u652F\u4ED8\u4F01\u4E1A\u5E94\u8FD8\u672C\u606F\u3002")))));
    };
    return ProductPage_PC;
}(React.Component));
export default ProductPage_PC;
//# sourceMappingURL=main-pc.js.map