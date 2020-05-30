// 开发生产环境的标识
const isDev = process.env.NODE_ENV === 'development'

// 服务器与数据库的相关配置
let SERVER_CONFIG, DB_CONFIG

if (isDev) {
    SERVER_CONFIG = {
        port: 4000,
    }
    DB_CONFIG = {
        port: 27017,
        host: 'localhost',
        name: '163shopdb'
    }
} else {
    // 由于没上线，所以一致
    SERVER_CONFIG = {
        port: 4000,
    }
    DB_CONFIG = {
        port: 27017,
        host: 'localhost',
        name: 'admin_db'
    }
}

/* 配置token检查白名单 */
const UN_CHECK_PATHS = []

// token签名加密的私钥(这个东西不能让外人看到)
const PRIVATE_KEY = '10086';

module.exports = {
    SERVER_CONFIG,
    DB_CONFIG,
    PRIVATE_KEY,
    UN_CHECK_PATHS
}