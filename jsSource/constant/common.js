import HOSTS from './hosts.yml';
export default {
    ENV: process.env.NODE_ENV,
    hosts: HOSTS[process.env.NODE_ENV || 'production'],
    storage: {
        TOKEN_NAME: 'X-JYM-Authorization',
        CORS_PROXY: 'X-JYM-CorsProxy-Url'
    },
    CDN_LINK: 'https://cdn2.jinyinmao.com.cn/website'
};
//# sourceMappingURL=common.js.map