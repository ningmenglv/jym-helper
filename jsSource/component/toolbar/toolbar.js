import React from "react";
import { Popover } from "antd";
import $ from "jquery";
import "./toolbar.less";
// 页面右侧fixed的工具栏 共5个模块
// 对应 [下载APP, 在线客服, 关注微信, 官方微博, 返回顶部]
var ToolBar = function (props) {
    // 1号模块下载app的弹出层
    var appDownloadPopver = (React.createElement("div", null,
        React.createElement("div", { className: "qr jymweixin" }),
        React.createElement("p", { className: "desc" }, "\u5173\u6CE8\u91D1\u94F6\u732B\u5FAE\u4FE1")));
    // 3号模块关注微信的弹出层
    var weiChatPopver = (React.createElement("div", null,
        React.createElement("div", { className: "qr jymapp" }),
        React.createElement("p", { className: "desc" }, "\u4E0B\u8F7D\u91D1\u94F6\u732BAPP")));
    // 返回顶部功能
    var scrollTop = function () {
        $("html,body").animate({ scrollTop: 0 }, 500);
    };
    // 1号模块下载app和3号模块关注微信有弹出层用Popover组件包裹
    // arrowPointAtCenter: 箭头将指向目标元素的中心 placement: 弹出出现方向
    var exportComponet = (React.createElement("div", { id: "toolbar" },
        React.createElement("ul", { className: "func-list" },
            React.createElement(Popover, { overlayClassName: "header-popper-qr", trigger: "hover", arrowPointAtCenter: true, placement: "left", content: appDownloadPopver },
                React.createElement("li", null,
                    React.createElement("span", { className: "text" }, "\u4E0B\u8F7DAPP"),
                    React.createElement("i", { className: "iconfont icon-shouji" }))),
            React.createElement("li", { className: "jym-pointer", onClick: function () {
                    return window.open("http://crm2.qq.com/page/portalpage/wpa.php?uin=4008556333&aty=0&a=0&curl=&ty=1");
                } },
                React.createElement("span", { className: "text" }, "\u5728\u7EBF\u5BA2\u670D"),
                React.createElement("i", { className: "iconfont icon-kefu" })),
            React.createElement(Popover, { overlayClassName: "header-popper-qr", trigger: "hover", arrowPointAtCenter: true, placement: "left", content: weiChatPopver },
                React.createElement("li", null,
                    React.createElement("span", { className: "text" }, "\u5173\u6CE8\u5FAE\u4FE1"),
                    React.createElement("i", { className: "iconfont icon-weixin" }))),
            React.createElement("li", { className: "jym-pointer", onClick: function () { return window.open("http://weibo.com/u/3822187413"); } },
                React.createElement("span", { className: "text" }, "\u5B98\u65B9\u5FAE\u535A"),
                React.createElement("i", { className: "iconfont icon-xinlang" })),
            React.createElement("li", { className: "jym-pointer", onClick: scrollTop },
                React.createElement("span", { className: "text" }, "\u8FD4\u56DE\u9876\u90E8"),
                React.createElement("i", { className: "iconfont icon-top" })))));
    return exportComponet;
};
export default ToolBar;
//# sourceMappingURL=toolbar.js.map