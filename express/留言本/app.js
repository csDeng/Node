const express = require('express')

const app = express()
// view engine setup

const bodyParser = require('body-parser')



// 表示用art-template模板引擎来渲染 .html 文件
app.engine('html', require('express-art-template'));

// app.set('view', {
//     debug: process.env.NODE_ENV !== 'production'
// });

// 修改默认的views目录
// app.set('views','./views');
// app.set('view engine', 'art');
 
// express-art-template 提供了render 方法
// res.render('html模板名'，{模板数据})
// 注意第一个参数不要加路径，他会默认到views中寻找

//配置body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let comments = [
    {
        name:'张三0',
        description:'node 真好玩',
        date:'2020-2-1'

    },
    {
        name:'张三1',
        description:'node 真好玩',
        date:'2020-2-1'

    },
    {
        name:'张三2',
        description:'node 真好玩',
        date:'2020-2-1'

    }
]


app.use('/public/',express.static('./public/'))


.get('/404',(req,res)=>{
    res.render('404.html')
})
.get('/admin',(req,res)=>{
    // 注意不要在文件名前面加/
    res.render('admin/admin.html',{
        title:'管理员页面'
    })
})
.get('/',(req,res)=>{
    res.render('index.html',{
        comments
    })
})
.get('/post',(req,res)=>{
    res.render('post.html')
})

// 处理表单post请求
// .get('/comment',(req,res)=>{
//     let comment = req.query
//     comment.date = '2020-2-1'
//     comments.push(comment)
//     res.redirect('/')
//     // res.statusCode = 302
//     // res.setHeader('Location','/index')
// })

// 当以post请求'/post'的时候，执行指定的执行函数
.post('/post',(req,res)=>{
    // 1 获取表单的post请求数据
    // 2 处理
    // 3 发送响应
    let comment = req.body
    comment.date = '2020-2-1'
    comments.push(comment)
    res.redirect('/')
})




.listen(3000,()=>{
    console.log('App is running at 127.0.0.1:3000')
})

