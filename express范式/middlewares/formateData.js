
// 数据格式化，中间件
function formateData(req,res,next){
    const url = req.originalUrl
    res.ok = (data)=>{
        res.status = 200
        res.json({
            api_version:'v1',
            api:        `api::${url}:: 调用成功`,
            data:       data
        })
    },
    res.error = (e)=>{
        res.status = 500
        res.json({
            api_version:'v1',
            api:`api::${url}:: 调用失败`,
            error: String(e)
        })
    }
    next()
}

module.exports = formateData;