const express = require('express')
const { nextTick } = require('process')

const app = express()

// 中间件本身是一个方法，接受三个参数

// console.log('中间件开始')

// // 不关心请求路径和请求方式都是用该中间件
// app.use(function(req,res,next){
//     console.log('收到请求1\r\n',)
//     next()
// })
// console.log('中间件结束')

app.use((req,res,next)=>{
    console.log('收到请求2')
    next()
})
app.use('/a',function(req,res,next){
    console.log('/a\r\n')
    next()
})

app.listen(3000,_=>{
    console.log('App is running at : 127.0.0.1:3000')
})