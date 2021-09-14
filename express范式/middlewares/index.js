"use strict";

const getToken = require('./getToken.js')
const formateData = require('./formateData.js')


module.exports = function(app){
    // 同时使用多个中间件
    app.use(formateData, getToken)
}
