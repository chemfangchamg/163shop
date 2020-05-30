const UserModel = require('../models/userModel');
// 登录的路由
module.exports = function (router) {
    router.post('/user/login', (req, res) => {
        UserModel.findOne({ username, password: md5(password) })
            .then((user) => {
                if (user) {
                    const token = jwt.sign({ id: user._id }, PRIVATE_KEY, { expiresIn: '7 days' })
                    res.send({
                        status: 0,
                        data: {
                            user,
                            token
                        }
                    })
                } else {
                    res.send({ status: 1, msg: '用户名或密码不正确!' })
                }

            })
            .catch((error) => {
                console.error('登陆异常', error)
                res.send({ status: 1, msg: '登陆异常, 请重新尝试' })
            })
    })
}