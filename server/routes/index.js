// 用来定义路由的路由器模块
var express = require('express');

// 得到路由器对象
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("参数是",req);
  res.render('index', { title: 'Express' });
});
router.post('/abc',function(req,res){
  console.log(req);
  res.render('index', { title: 'Express' });
  
})
// 登录/user/login
require('./login')(router)
// 注册/user/add
require('./users')(router)
// 请求主页推荐数据
require('./homeGet')(router)
// 请求分类页的数据
require('./categoryGet')(router)



module.exports = router;
