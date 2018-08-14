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
import './style-pc.less';
var Security_PC = /** @class */ (function (_super) {
    __extends(Security_PC, _super);
    function Security_PC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            elHeight: [],
            prvHeight: 0,
            active1: false,
            active2: false,
        };
        return _this;
    }
    Security_PC.prototype.componentDidMount = function () {
        var _this = this;
        // console.log(this.props)
        this.getHeight();
        setTimeout(function () { _this.handleScroll(); }, 500);
        window.addEventListener('scroll', this.handleScroll.bind(this));
    };
    //获取元素文档高度
    Security_PC.prototype.getHeight = function () {
        var elHeight = [];
        var el = document.querySelectorAll('.d_jump');
        for (var i = 0; i < el.length; i++) {
            var offsetTop = el[i].offsetTop;
            elHeight.push(offsetTop);
        }
        this.setState({
            elHeight: elHeight
        });
    };
    //计算scrollTop高度
    Security_PC.prototype.handleScroll = function () {
        var topHeight = document.documentElement.scrollTop || document.body.scrollTop; //视口高度
        var offersetHeight = document.body.offsetHeight; // 网页可见高度
        var midHeight = topHeight + offersetHeight / 2; // 计算屏幕中线的文档高度
        var upHeight = topHeight + offersetHeight / 3; //计算屏幕上1/3的文档高度
        var downHeight = topHeight + (offersetHeight / 3) * 2; //计算屏幕下1/3的文档高度
        if (this.state.prvHeight < midHeight) {
            // console.log( "down")
            // let findVal = this.state.elHeight.find((n) => {
            //   return upHeight > n
            // })    
            if (downHeight > this.state.elHeight[0] && downHeight < this.state.elHeight[1]) {
                this.setState({
                    active1: true
                });
            }
            if (downHeight > this.state.elHeight[1] && downHeight < this.state.elHeight[2]) {
                this.setState({
                    active2: true
                });
            }
        }
        if (this.state.prvHeight > midHeight) {
            //  console.log("up")
            // let findVal = this.state.elHeight.findIndex((n) => {
            //   return downHeight < n 
            // })
            if (upHeight < this.state.elHeight[1] && upHeight > this.state.elHeight[0]) {
                this.setState({
                    active1: true
                });
            }
            if (upHeight < this.state.elHeight[2] && upHeight > this.state.elHeight[1]) {
                this.setState({
                    active2: true
                });
            }
        }
        this.setState({
            prvHeight: midHeight
        });
    };
    Security_PC.prototype.render = function () {
        // const props = this.props
        return (React.createElement("div", { id: "security-pc" },
            React.createElement("div", { className: 'd_jump insurance insurance2' }, this.state.active1 &&
                React.createElement("div", { className: 'content active1' },
                    React.createElement("div", { className: 'sub-content1' },
                        React.createElement("p", { className: 'p1' }, "\u6295\u8D44\u5B89\u5168"),
                        React.createElement("p", { className: 'p2' }, "\u8D44\u4EA7\u4F18\u8D28\u2014\u7968\u636E\u8D22\u5BCC\u7BA1\u7406 \u7A33\u76C8\u5B89\u5FC3"),
                        React.createElement("div", { className: 'text3' },
                            "\u5E73\u53F0\u4E13\u6CE8\u4E8E\u7968\u636E\u8D22\u5BCC\u7BA1\u7406\u5E02\u573A\uFF0C\u878D\u8D44\u9879\u76EE\u4EE5\u771F\u5B9E\u3001\u5408\u6CD5\u7684\u5546\u4E1A\u6C47\u7968\uFF08\u94F6\u884C\u627F\u5151\u6C47\u7968 \u5546\u4E1A\u627F\u5151\u6C47\u7968\uFF09",
                            React.createElement("br", null),
                            "\u4F5C\u8D28\u62BC\u62C5\u4FDD\uFF0C\u6536\u76CA\u7A33\u5065\uFF0C\u5B89\u5168\u6027\u9AD8\uFF1B\u94F6\u7968\u8D22\u5BCC\u7BA1\u7406\u9879\u76EE\u5230\u671F\u540E\uFF0C\u7531\u51FA\u7968\u94F6\u884C\u65E0\u6761\u4EF6\u5151\u4ED8\uFF0C\u7A33\u5065\u589E\u503C\u3002")))),
            React.createElement("div", { className: 'd_jump insurance insurance3' }, this.state.active2 &&
                React.createElement("div", { className: 'content content3' },
                    React.createElement("div", { className: 'img-safe active2' },
                        React.createElement("img", { src: require('./images/safe.png'), alt: "" })),
                    React.createElement("div", { className: 'sub-content2 active3' },
                        React.createElement("p", null, "\u8D44\u91D1\u6D41\u5411\u2014\u7528\u6237\u8D44\u91D1 \u94F6\u884C\u5B58\u7BA1"),
                        React.createElement("div", null, "\u91D1\u94F6\u732B\u4E0E\u94F6\u884C\u7B7E\u7F72\u8D44\u91D1\u5B58\u7BA1\u534F\u8BAE\uFF0C\u6295\u8D44\u8005\u8D44\u91D1\u8D26\u6237\u4E0E\u5E73\u53F0\u81EA\u6709\u8D26\u6237\u5206\u5F00\u8FD0\u884C\uFF0C\u5B9E\u73B0\u6295\u8D44\u8005\u8D44\u91D1\u4E0E\u5E73\u53F0\u8D44\u91D1\u5B8C\u5168\u9694\u79BB\u3002")))),
            React.createElement("div", { className: 'd_jump insurance insurance4' },
                React.createElement("div", { className: 'content content4' },
                    React.createElement("h2", { className: 'p1' }, "\u6570\u636E\u4E0E\u9690\u79C1\u5B89\u5168"),
                    React.createElement("div", { className: 'sub-content4' },
                        React.createElement("div", { className: 'flex left' },
                            React.createElement("ul", null,
                                React.createElement("li", { id: "animate-p1" },
                                    React.createElement("p", { className: 'p2' }, "\u5168\u9762\u9690\u79C1\u4FDD\u62A4"),
                                    React.createElement("div", { className: 'text3' }, "\u5E73\u53F0\u4E25\u683C\u9075\u5B88\u56FD\u5BB6\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\uFF0C\u8BBE\u6709\u4E25\u683C\u7684\u4FE1\u606F\u5B89\u5168\u673A\u5236\uFF0C\u5168\u9762\u4FDD\u62A4\u7528\u6237\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u9664\u5BA2\u6237\u4E8B\u5148\u540C\u610F\u3001\u6216\u5E94\u653F\u5E9C\u90E8\u95E8\u53CA\u4E0A\u7EA7\u76D1\u7BA1\u673A\u6784\u7684\u8981\u6C42\u800C\u62AB\u9732\u4E4B\u5916\uFF0C\u4E0D\u4F1A\u5411\u4EFB\u4F55\u5916\u90E8\u673A\u6784\u62AB\u9732\u3002")),
                                React.createElement("li", { id: "animate-p3" },
                                    React.createElement("p", { className: 'p2' }, "\u707E\u5907\u5E94\u6025"),
                                    React.createElement("div", { className: 'text3' }, "\u57FA\u4E8EWindows Azure \u5B58\u50A8\u63D0\u4F9B\u6570\u636E\u672C\u5730\u5F02\u5730\u591A\u91CD\u5907\u4EFD\uFF0C\u4FDD\u969C\u6570\u636E\u9AD8\u5EA6\u53EF\u9760\uFF0C\u652F\u630199.9%\u7684\u8FD0\u884C\u65F6\u95F4\u670D\u52A1\u7EA7\u522B\u534F\u8BAE\uFF0C\u652F\u6301\u5F02\u5730\u707E\u5907\u6062\u590D\u3002")))),
                        React.createElement("div", { className: 'flex center' },
                            React.createElement("div", { className: 'bgCircle' }),
                            React.createElement("div", { className: 'pt1 pt' }),
                            React.createElement("div", { className: 'pt2 pt' }),
                            React.createElement("div", { className: 'pt3 pt' }),
                            React.createElement("div", { className: 'pt4 pt' }),
                            React.createElement("div", { className: 'logo' },
                                React.createElement("img", { src: require('./images/logo.png'), alt: "" }))),
                        React.createElement("div", { className: 'flex right' },
                            React.createElement("ul", null,
                                React.createElement("li", { id: "animate-p2" },
                                    React.createElement("p", { className: 'p2' }, "\u5B89\u5168\u5957\u63A5\u5C42\u534F\u8BAE\u548C128 \u4F4D\u52A0\u5BC6\u6280\u672F"),
                                    React.createElement("div", { className: 'text3' }, "\u5E73\u53F0\u652F\u6301\u5B89\u5168\u5957\u63A5\u5C42\u534F\u8BAE\u548C128\u4F4D\u52A0\u5BC6\u6280\u672F\uFF0C\u7528\u6237\u5728\u8FDB\u884C\u4F1A\u5458\u7BA1\u7406\u3001\u4E2A\u4EBA\u8D26\u6237\u7BA1\u7406\u3001\u5145\u503C\u7B49\u6D89\u53CA\u654F\u611F\u4FE1\u606F\u64CD\u4F5C\u65F6\uFF0C\u4FE1\u606F\u5C06\u4F1A\u88AB\u81EA\u52A8\u52A0\u5BC6\u540E\u5B89\u5168\u53D1\u9001\u3002")),
                                React.createElement("li", { id: "animate-p4" },
                                    React.createElement("p", { className: 'p2' }, "\u6570\u636E\u5B89\u5168\u627F\u8BFA"),
                                    React.createElement("div", { className: 'text3' }, "\u91C7\u53D6\u5404\u79CD\u5408\u9002\u7684\u7269\u7406\u3001\u7535\u5B50\u548C\u7BA1\u7406\u65B9\u9762\u7684\u63AA\u65BD\u6765\u4FDD\u62A4\u6570\u636E\uFF0C\u4EE5\u5B9E\u73B0\u5BF9\u6570\u636E\u5B89\u5168\u7684\u627F\u8BFA\u3002"))))))),
            React.createElement("div", { className: 'content content5' },
                React.createElement("h3", null, "\u4E13\u4E1A\u98CE\u63A7"),
                React.createElement("ul", null,
                    React.createElement("li", { className: 'normal' },
                        React.createElement("img", { src: require('./images/icon01.png') }),
                        React.createElement("p", null, "\u7CBE\u6311\u7EC6\u9009 \u7B5B\u9009\u4F18\u8D28\u9879\u76EE"),
                        React.createElement("div", { className: 'desc' }, "\u57FA\u4E8E\u591A\u5E74\u7684\u7EBF\u4E0B\u7968\u636E\u884C\u4E1A\u7ECF\u9A8C\uFF0C\u5E73\u53F0\u91C7\u7528\u4E25\u683C\u7684\u51C6\u5165\u95E8\u69DB\uFF0C\u9074\u9009\u4F18\u8D28\u7968\u636E\uFF0C\u4ECE\u6E90\u5934\u63A7\u5236\u98CE\u9669\uFF0C\u5BF9\u4E8E\u4EE5\u5546\u4E1A\u627F\u5151\u6C47\u7968\u4F5C\u8D28\u62BC\u7269\u7684\u878D\u8D44\u4F01\u4E1A\uFF0C\u5E73\u53F0\u901A\u8FC7\u5B9E\u5730\u8003\u5BDF\uFF0C\u5BF9\u4F01\u4E1A\u7684\u4FE1\u7528\u3001\u7ECF\u8425\u72B6\u51B5\u3001\u8FD8\u6B3E\u80FD\u529B\u7B49\u505A\u8BE6\u5C3D\u8C03\u67E5\u53CA\u6709\u6548\u8BC4\u4F30\u3002")),
                    React.createElement("li", { className: 'special' },
                        React.createElement("img", { src: require('./images/icon02.png') }),
                        React.createElement("p", null, "\u771F\u4F2A\u53CC\u91CD\u9A8C\u7968 \u7968\u636E\u94F6\u884C\u6258\u7BA1"),
                        React.createElement("div", { className: 'desc' }, "\u5E73\u53F0\u9A8C\u7968\u56E2\u961F\u4E0E\u6258\u7BA1\u94F6\u884C\u5171\u540C\u9A8C\u7968\uFF0C\u6709\u6548\u4FDD\u969C\u6BCF\u4E00\u5F20\u7968\u636E\u7684\u771F\u5B9E\u6027\uFF0C\u6240\u6709\u8D28\u62BC\u7968\u636E\u7531\u6258\u7BA1\u94F6\u884C\u8FDB\u884C\u7EDF\u4E00\u6258\u7BA1\u3002")),
                    React.createElement("li", { className: 'normal noMarginRight' },
                        React.createElement("img", { src: require('./images/icon03.png') }),
                        React.createElement("p", null, "\u7B2C\u4E09\u65B9\u62C5\u4FDD \u5B89\u5168\u5347\u7EA7"),
                        React.createElement("div", { className: 'desc' }, "\u5BF9\u4E8E\u4EE5\u5546\u4E1A\u627F\u5151\u6C47\u7968\u4F5C\u8D28\u62BC\u7269\u7684\u878D\u8D44\u9879\u76EE\uFF0C\u5E73\u53F0\u5F15\u5165\u5177\u6709\u503A\u52A1\u6E05\u507F\u80FD\u529B\u7684\u7B2C\u4E09\u65B9\u62C5\u4FDD\u673A\u6784\uFF0C\u7531\u94F6\u884C\u3001\u5927\u578B\u56FD\u6709\u4F01\u4E1A\u3001\u5927\u578B\u56FD\u6709\u62C5\u4FDD\u516C\u53F8\u6216\u5927\u578B\u4F01\u4E1A\u96C6\u56E2\u7B49\u51FA\u5177\u4FDD\u51FD\uFF0C\u4E3A\u9879\u76EE\u5230\u671F\u540E\u6309\u65F6\u5F52\u8FD8\u501F\u6B3E\u672C\u606F\u63D0\u4F9B\u8FDE\u5E26\u8D23\u4EFB\u62C5\u4FDD\u3002")))),
            React.createElement("div", { className: 'insurance insurance6' },
                React.createElement("h2", { className: 'title' }, "\u98CE\u9669\u7BA1\u7406"),
                React.createElement("ul", { className: 'process-management' },
                    React.createElement("li", null,
                        React.createElement("dl", null,
                            React.createElement("dt", null,
                                React.createElement("img", { src: require('./images/icon04.png') })),
                            React.createElement("dd", { className: 'sub-title' }, "\u98CE\u9669\u8BC4\u4F30\u6D41\u7A0B"),
                            React.createElement("dd", { className: 'desc' }, "1.\u57FA\u672C\u51C6\u5165  2.\u5C3D\u804C\u8C03\u67E5 3.\u4FE1\u7528\u8BC4\u4F30 4.\u4EBA\u5DE5\u5BA1\u6838  5.\u53D1\u5E03\u501F\u6B3E"))),
                    React.createElement("li", null,
                        React.createElement("dl", null,
                            React.createElement("dt", null,
                                React.createElement("img", { src: require('./images/icon05.png') })),
                            React.createElement("dd", null,
                                React.createElement("div", { className: 'sub-title' }, " \u98CE\u9669\u9884\u8B66\u7BA1\u7406 "),
                                React.createElement("p", null, "\u6211\u4EEC\u5BF9\u501F\u6B3E\u9879\u76EE\u8FDB\u884C\u4E86\u98CE\u9669\u6D4B\u8BC4\uFF0C\u5E76\u5728\u5E73\u53F0\u4E0A\u8FDB\u884C\u4E86\u5145\u5206\u7684\u98CE\u9669\u63D0\u793A\u3002\u540C\u65F6\uFF0C\u6211\u4EEC\u4E5F\u5C06\u6309\u7167\u76D1\u7BA1\u8981\u6C42\u5BF9\u9879\u76EE\u4FE1\u606F\u548C\u501F\u6B3E\u4EBA\u4FE1\u606F\u53CA\u65F6\u8FDB\u884C\u62AB\u9732\u3002")))),
                    React.createElement("li", null,
                        React.createElement("dl", null,
                            React.createElement("dt", null,
                                React.createElement("img", { src: require('./images/icon06.png') })),
                            React.createElement("dd", null,
                                React.createElement("div", { className: 'sub-title' }, " \u50AC\u6536\u65B9\u5F0F "),
                                React.createElement("p", null, "1.\u65E9\u671F\u50AC\u6536 2.\u4E2D\u671F\u50AC\u6536 3.\u59D4\u5916\u50AC\u6536 4.\u6CD5\u5F8B\u884C\u52A8"))))),
                React.createElement("div", { className: 'process-footer' }, "\u5982\u679C\u7528\u6237\u903E\u671F\u672A\u5F52\u8FD8\u501F\u6B3E\uFF0C\u98CE\u9669\u7BA1\u7406\u90E8\u95E8\u5C06\u7B2C\u4E00\u65F6\u95F4\u901A\u8FC7\u77ED\u4FE1\u3001\u7535\u8BDD\u7B49\u65B9\u5F0F\u63D0\u9192\u7528\u6237\u8FDB\u884C\u8FD8\u6B3E\u3002\u7136\u540E\u4F1A\u8054\u7CFB\u8BE5\u501F\u6B3E\u4EBA\u7684\u7D27\u6025\u8054\u7CFB\u4EBA\u3001\u76F4\u7CFB\u4EB2\u5C5E\u3001\u5355\u4F4D\u7B49\u7763\u4FC3\u7528\u6237\u5C3D\u5FEB\u8FD8\u6B3E\u3002\u5982\u679C\u8BE5\u501F\u6B3E\u4EBA\u4ECD\u672A\u8FD8\u6B3E\uFF0C\u4EA4\u7531\u4E13\u4E1A\u7684\u50AC\u6536\u56E2\u961F\u4E0E\u7B2C\u4E09\u65B9\u4E13\u4E1A\u673A\u6784\u5408\u4F5C\uFF0C\u8FDB\u884C\u5305\u62EC\u4E0A\u95E8\u7B49\u4E00\u7CFB\u5217\u7684\u50AC\u6536\u5DE5\u4F5C\uFF0C\u76F4\u81F3\u91C7\u53D6\u6CD5\u5F8B\u624B\u6BB5\u3002"))));
    };
    return Security_PC;
}(React.Component));
export default Security_PC;
//# sourceMappingURL=main-pc.js.map