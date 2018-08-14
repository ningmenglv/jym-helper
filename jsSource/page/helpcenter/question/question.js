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
import Layout from "../../layout";
var QuestionPage = /** @class */ (function (_super) {
    __extends(QuestionPage, _super);
    function QuestionPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionPage.prototype.render = function () {
        return React.createElement("div", { id: "question-page" }, "QuestionPage");
    };
    return QuestionPage;
}(React.Component));
Layout(QuestionPage, {
    typeIndex: 7,
    activeIndex: 0,
    title: "常见问题",
    status: true
});
//# sourceMappingURL=question.js.map