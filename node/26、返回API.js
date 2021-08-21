const http = require ('http')
const fs = require ('fs')
const string = require('querystring')

// 1、创建服务
const server = http.createServer ()

// 2、监听请求
// 3、响应请求
// 4、设置监听接口
server.on ('request', (req,res)=>{
  // 把获取到的路径中的\转成/
  let baseUrl = __dirname.replace (/\\/g,'/') 
  baseUrl += '/www'
  let url = req.url
  console.log(baseUrl)
  if (url !== '/'){
    url = baseUrl + url
  }
  else {
    url = baseUrl + '/'
  }
  console.log (url)
  
  fs.readFile (url, (err,data)=>{
    if (err) {
      res.writeHead (404, {'Content-Type':'text/html;charset=utf-8'})
      res.write (url + ' is not Found')
      return res.end ()

    }
    res.writeHead (200,{'Content-Type':'text/json;charset=utf-8'})
    res.write (data)
    res.end ()
    console.log (data.toString ())
  })

}).listen (3000)

console.log ('server is running at => \r\n', '127.0.0.1:3000')


