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
import * as React from 'react';
var SideIcon = /** @class */ (function (_super) {
    __extends(SideIcon, _super);
    function SideIcon(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            style: {
                fontSize: _this.props.fontSize || '28px'
            }
        };
        return _this;
    }
    SideIcon.prototype.render = function () {
        return (React.createElement("span", { className: 'sideIcon ' + (this.props.className || '') },
            React.createElement("i", { className: 'top ' + this.props.iconClass, style: this.state.style }),
            React.createElement("i", { className: 'bottom ' + this.props.iconClass, style: __assign({ color: this.props.activeColor }, this.state.style) })));
    };
    return SideIcon;
}(React.Component));
export default SideIcon;
//# sourceMappingURL=side-icon.js.map