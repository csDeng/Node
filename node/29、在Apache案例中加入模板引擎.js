const http = require('http')
const template = require ('art-template')
const fs = require('fs')

const server = http.createServer()

baseUrl = 'D:/Codes/Git/coding/node/www'

server.on ('request',(req,res)=>{
  var url = req.url
  var filePath = '/index.html'

  if (url !== '/') {
    filePath = url 
  }

  console.log ('请求url\r\n' + baseUrl + filePath )
  
  

  fs.readFile (baseUrl+filePath, (err,data)=>{
    if (err) {
      return res.end ('Can not find the file => ' + baseUrl )
    }
    let ans = ' '
    ans += data.toString () 

    
    fs.readdir (baseUrl, (err, files) => {
      if (err) {
        return res.end ('Can not find ' + baseUrl )
      }
      else {
        
        var htmlStr = template.render (ans, {
          files : files,
          title: '哈哈哈'
        })

      // console.log(htmlStr)
      res.end (htmlStr)
    }
  })
    
    
  })

}).listen (3000,'127.0.0.1')

console.log ('Server is running at 127.0.0.1:3000')