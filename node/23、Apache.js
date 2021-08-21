/**
 * 使用服务器的基本流程
 * 1、创建服务器
 * 2、监听 Server 的 request 请求，设置处理函数
 *  请求
 *      处理
 *  响应
 *      一个请求一个响应
 * 3、绑定端口，启动服务
 */

const http = require('http');
const fs = require('fs')

const server = http.createServer()

baseUrl = 'D:/Codes/node/www'

server.on ('request',(req,res)=>{
  var url = req.url
  var filePath = '/index.html'

  if (url !== '/') {
    filePath = url 
  }

  
  console.log ('请求url\r\n' + baseUrl + filePath )
  fs.readFile (baseUrl + filePath, (err, data)=>{
    if (err) {
      return res.end ('404 ')
    }
    res.end (data)
  })
}).listen (3000,'127.0.0.1')

console.log ('Server is running at 127.0.0.1:3000')