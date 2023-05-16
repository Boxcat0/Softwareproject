const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        "localhost:3000/CreateInfo",
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분
        })
    );
};