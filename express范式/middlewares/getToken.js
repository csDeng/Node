const jwt = require('jsonwebtoken')
// 根据authorization 解析出用户id
function getToken(req,res,next){
    try {
        const token = String(authorization).split(' ').pop()
        const { id } = jwt.verify(token, 'jwt')
        res.tokenId = id
    } catch (error) {
        res.tokenId  = null
    }finally{
        next()
    }
}

module.exports = getToken;
