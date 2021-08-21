const express  =require('express')

const bodyParser = require('body-parser')
const router = require('./router')

const app = express()

// 开放public目录
app.use('/public/',express.static('./public/'))
app.use('/node_modules/',express.static('./node_modules/'))

// 配置express-art-template 
app.engine('html',require('express-art-template'))


// 配置body-parser
app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

// 路由
// router(app)
// 把路由容器挂载到app服务中
app.use(router)

app.listen(3000,()=>{
    console.log('App is running at : 127.0.0.1:3000')
})