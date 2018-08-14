import Axios from "axios";
import { Constant } from "@/constant";
var bVersion = parseFloat(window.navigator.userAgent.replace(/.+(MSIE (\S+);).+/, "$2"));
var CurrentHost = window.location.protocol + "//" + window.location.host;
var parseUrl = function (url) {
    var protocol = url.replace(/^(http|https):\/\/.+$/, "$1");
    var address = url.replace(/^(http|https):\/\/(.+)$/, "$2");
    var host = address.substring(0, address.indexOf("/"));
    var path = address.substr(address.indexOf("/")).replace("?", "&");
    return {
        host: protocol + "://" + host,
        path: path
    };
};
// API文档地址https://github.com/mzabriskie/axios
// 请求拦截器
Axios.interceptors.request.use(function (config) {
    if (!Number.isNaN(bVersion) && bVersion <= 9) {
        var url = parseUrl(config.url);
        config.url = CurrentHost + "/proxy?targetUrl=" + url.path;
        config.headers.common[Constant.storage.CORS_PROXY] = url.host;
    }
    return config;
});
//# sourceMappingURL=http.js.map