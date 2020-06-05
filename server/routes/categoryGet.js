// 请求分类页数据的路由
const categoryData = require('../public/categoryL1List.json')
const cateList = require('../public/cateList.json')

module.exports = function (router) {
    router.get('/category', (req, res, next) => {
        const categoryid = +req.query.categoryid
        console.log("查询的参数是", categoryid)
        // console.log(req.query);
        const categoryRightData = cateList.filter((item) => {
            return item.id === categoryid
        })
        if (req.query.categoryid) {
            // 有参数
            // console.log("有参数");
            res.json({
                code: 200,
                data1: categoryData,
                data2: categoryRightData
            })

        } else {
            // 没参数
            console.log("没参数");
            res.json({
                code: 200,
                data1: categoryData
            })
        }
    })
}