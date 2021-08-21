/**
 * app application
 * 
 * 把当前模块所有的依赖项都声明在文件的顶部
 * 
 * 为了让目录结构保持统一清晰，所以约定把所有的html文件放在views文件夹
 * 把所有的静态资源放在public文件夹
 * 
 * 哪些资源能被访问，哪些不能，可以用代码灵活控制
 * 
 */

const http = require('http')
const fs = require('fs')
const template = require('art-template')

const URL = require('url')
const {log} = console

const server  = new http.Server()

/***
 * 对于这种表单提交的请求地址，由于其中具有用户动态填写的内容
 * 所以不可能通过判断完整的url路径来处理这个请求
 * 
 * 
 * 结论： 对于我们来讲，其实只需要判断，如果你的请求路径为 /get 
 */

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

server.on('request',(req,res)=>{
    // 使用url.parse解析url
    let url = URL.parse(req.url,true)
    let { pathname, query } = url
    log('url解析结果--->',pathname, '\r\n')
    if(pathname === '/'){
        url = './views/index.html'
    }
    else if(pathname.indexOf('/public/')===0){
        url = '.' + pathname
    }
    else if(pathname === '/comment'){
        res.setHeader("Content-Type","application/json;charset=utf-8")
        query.date = '2021-2-14'
        comments.push(JSON.parse(JSON.stringify(query))) 
        log(comments)
        // 开始重定向
        /**
         * 1、状态码设置为302，临时重定向
         * 2、在响应头中通过location 告诉客户端往哪里重定向
         * 
         * 如果客户端发现收到服务器的状态码是302，就会I自动去响应头查找location，自动跳转
         */
        res.statusCode = 302
        res.setHeader('Location','/')
        res.end()
        return 
    }
    else url = './views' + pathname

    log('请求的url为==>',url,'\r\n')

    // 正则匹配加headers
    if(/.css/g.test(url))  res.setHeader("Content-Type","text/css;charset=utf-8")
    else if(/.js/g.test(url))  res.setHeader("Content-Type","text/javascript;charset=utf-8")
    else   res.setHeader("Content-Type","text/html;charset:utf-8")

    fs.readFile(url,function(err,data){
        if(err)  {
            res.write('404 NOT　FOUND!!!')
            res.end()
        }
        else {
            let html = template.render(data.toString(),{
                comments:comments
            })
            res.end(html)
        }
    })
    
}).listen(3000,'127.0.0.1')

log('Server is running at : 127.0.0.1:3000')