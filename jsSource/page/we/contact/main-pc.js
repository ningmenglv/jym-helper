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
import React from 'react';
import './style-pc.less';
var Contact_PC = /** @class */ (function (_super) {
    __extends(Contact_PC, _super);
    function Contact_PC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contact_PC.prototype.render = function () {
        var contactList = this.props.contactList;
        console.log(contactList);
        return (React.createElement("div", { id: 'contact-pc' },
            contactList.map(function (item, index) {
                return (React.createElement("div", { className: 'item', key: index },
                    React.createElement("h2", null, item.title),
                    item.infoList.map(function (info, index) {
                        return (React.createElement("p", { key: index },
                            info.infoTitle,
                            "\uFF1A",
                            info.info,
                            !!info.href &&
                                React.createElement("a", { className: 'mail', href: 'mailto:' + info.href },
                                    React.createElement("span", null, info.href))));
                    })));
            }),
            React.createElement("div", { className: 'img_box' },
                React.createElement("img", { src: require("./images/code_jym.jpg") })),
            React.createElement("div", { className: 'img-map' },
                React.createElement("img", { src: require("./images/map_jym.jpg") }))));
    };
    return Contact_PC;
}(React.Component));
export default Contact_PC;
//# sourceMappingURL=main-pc.js.map