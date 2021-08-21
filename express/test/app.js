// 1、安装
// 2、引包


const express = require('express')

// 3、创建应用
// 相当于原来的http.createServer()
const app = express()

// 公开指定目录, 第一个参数是路径的别名即:alias
// app.use('/public/',express.static('./public'))

// 当省略第一个参数的时候，则可以身略/public
app.use(express.static('./public'))
// app.engine('art',require('express-art-template'))
// app.set('view',{
//     debug:process.env.NODE_ENV !=='production'
// })
// app.set('views',os.path.join(__dirname,'views'))

// app.set('view engine','art')


// 收到get请求的'/'，的时候执行回调处理函数
app.get('/',(req,res)=>{
    res.render('index.html')
})
app.get('/index',(req,res)=>{
    res.send(
        `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>index</h1>
    <hr/>
    <p>这是一个新的段落</p>
</body>
</html>
        `
    )
})

app.get('/about',(req,res)=>{
    res.send('关于')
})

app.get('/public/js/main',(req,res)=>{})

app.listen(3000)

console.log('Server is running at: 127.0.0.1:3000')
