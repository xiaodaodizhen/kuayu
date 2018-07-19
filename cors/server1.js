let express = require("express");
let app = express();
let whitList = ["http://localhost:3000"];// 白名单
app.use(function (req, res, next) {
    let origin = req.headers.origin;
    if (whitList.includes(origin)) {

        // 设置哪个源可以访问
        res.setHeader("Access-Control-Allow-Origin", origin);
        // 设置携带哪个头访问
        res.setHeader("Access-Control-Allow-Headers", "name,dd,dd");
        // 设置请求方法
        res.setHeader("Access-Control-Allow-Methods", "PUT");
        // 设置允许cookie 跨域
        res.setHeader("Access-Control-Allow-Credentials", true);
        // 允许前端获取哪个头
        res.setHeader("Access-Control-Expose-Headers", "name");
        // 预检测的存活时间（间隔时间）；
        res.setHeader("Access-Control-Max-Age", 6000);
        if (req.method == "OPTIONS") {// method 为OPTIONS时。为预检测(检测是否跨域成功)
            res.end();
        }
    }
    next();
});
app.get('/getData', function (req, res) {
    res.end("你好");
});
app.put('/getData', function (req, res) {
    res.end("PUT方法");
});
app.use(express.static(__dirname));
app.listen(4000);