// 操作users集合
// 引入mongoose和md5
const mongoose = require('mongoose')
const md5 = require('blueimp-md5')
// 描述文档结构的schema(集合)
const userSchema = new mongoose.Schema({
    username: { type: String, required: true }, // 用户名
    password: { type: String, required: true }, // 密码
})

// 操作集合的model(是一个构造函数，他的实例就是document)
const UserModel = new mongoose.model('users', userSchema)

// 初始化超级用户
UserModel.findOne({ username: 'admin' }).then(user => {
    if (!user) {
        UserModel.create({ username: 'admin', password: md5('admin') })
            .then(user => {
                console.log('初始化用户: 用户名: admin 密码为: admin')
            })
    }
})

// 向外暴露Model
module.exports = UserModel