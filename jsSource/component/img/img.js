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
import "./style.less";
var Img = /** @class */ (function (_super) {
    __extends(Img, _super);
    function Img(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            style: {},
            imgDom: "imgDom"
        };
        return _this;
    }
    Img.prototype.componentDidMount = function () {
        var _this = this;
        var imgDom = this.refs.imgDom;
        var props = this.props;
        imgDom.onload = function () {
            var actualRate = imgDom.width / imgDom.height;
            if (props.rate === 1 && imgDom.width >= imgDom.height) {
                _this.setState({
                    style: {
                        width: props.conWidth + props.unit,
                        height: props.conWidth / actualRate + props.unit
                    }
                });
            }
            else {
                if (imgDom.width >= imgDom.height) {
                    _this.setState({
                        style: {
                            width: props.conWidth + props.unit,
                            height: props.conWidth / actualRate + props.unit
                        }
                    });
                }
                else {
                    _this.setState({
                        style: {
                            height: props.conHeight + props.unit,
                            width: props.conHeight * actualRate + props.unit
                        }
                    });
                }
            }
        };
    };
    Img.prototype.render = function () {
        var state = this.state;
        var props = this.props;
        var style = Object.assign({}, props.style, state.style);
        return (React.createElement("img", { id: "img-component", ref: state.imgDom, src: props.src, style: style }));
    };
    return Img;
}(React.Component));
export default Img;
//# sourceMappingURL=img.js.map