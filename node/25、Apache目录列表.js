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
        var content = ''

        files.forEach (item=>{
          // console.log(item)
          // console.log('==============\r\n')
          content += 
          `<tr>
            <td ><a class="icon file" draggable="true" href="/D:/Codes/node/www/%E4%B8%8B%E8%BD%BD.jpg"> ${item} </a></td>
            <td class="detailsColumn" data-value="20558">20.1 kB</td>
            <td class="detailsColumn" data-value="1610729253">2021/1/16 上午12:47:33</td>
          </tr>`
        })
      ans = ans.replace ('^_^', content )
      console.log(ans)
      res.end (ans)
    }
  })
    
    
  })
/***
 * 1、如何得到baseUrl 里面的信息
 * fs.readdir
 * 
 * 2、如何将得到的文件名和目录替换到template.html中
 *  在template.html中需要替换的位置预留一个特殊的标记
 * （像使用模板引擎一样，根据files生成需要的HTML 内容）
 * 
 * 只要做了这两件事，就可以得到 Apache 类似的目录效果
 */

}).listen (3000,'127.0.0.1')

console.log ('Server is running at 127.0.0.1:3000')