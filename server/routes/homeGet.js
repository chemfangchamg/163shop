// 请求首页数据的路由
const homeData = require('../public/index.json')
module.exports = function (router) {
    router.get('/home', function (req, res, next) {
        console.log("服务器收到请求-home",req.query);
        res.json({
            code:200,
            data:homeData,
        })
        // res.attachment('../public/index.json')
    });
}