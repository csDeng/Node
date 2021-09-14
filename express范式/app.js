"use strict";
const express = require('express')
const path = require('path')
const routes = require('./api/index')
const app = express()
const cors = require('cors');
const middleware = require('./middlewares/index.js')
const port = 3000
// 开放静态资源
app.use( express.static( path.join( __dirname, 'public') ) )

// 使用body-parser中间件解析请求主体
app.use( express.urlencoded({extended: false}) )

// json中间件以及允许跨域中间件
app.use( express.json(), cors() )




middleware(app)

routes(app)
app.route('/')
    .get( (req, res) =>{
        console.log("get")
        res.ok('get ok')
    })    
    .post( (req, res) =>{
        console.log("post\r\n", req.body, req.params)
        res.ok("post ok")
    }) 
    .put( (req, res) =>{
        console.log("put")
        res.ok("put ok")
    }) 
    .delete( (req, res) =>{
        console.log("delete")
        res.ok("delete ok")
    });
app.get('/error',(req,res)=>{
    res.error('error')
})

app.listen(port,()=>{
    console.log("Server is running at \r\n http://127.0.0.1:3000")
})


