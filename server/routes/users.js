/* 此模块是关于用户管理的模块 */

// 引入UserModel
const UserModel = require('../models/userModel')

// 暴露的是一个函数，在index中调用
module.exports = function (router) {
  router.post('./user/add', (req, res) => {
    // 读取并处理请求参数
    const { username, password } = req.body
    // 判断用户是否存在，如果存在则返回错误，如果不存在，就保存
    UserModel.findOne(username)
      .then((user) => {
        if (user) {
          res.send({ status: 1, msg: '此用户已经存在' })
          return Promise.reject()
        } else {
          // 保存密码
          console.log(username, password);
        }
      })
      // 
      .then((user) => {
        res.send(`${user}注册成功`)
      })
      .catch((err) => {
        res.send(`注册异常`,err)
      })
  })
}