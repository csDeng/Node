const fs = require('fs')

const string = require ('querystring')
// __dirname 获取当前路径
console.log ('__dirname==>',__dirname, typeof (__dirname))
console.log ('stringify==>',__dirname.replace (/\\/g,'/'))
fs.readdir ('D:/Codes/node/www', (err, data)=>{
  if (err) {
    return console.log ('目录不存在')
  }
  else {
    console.log (data)
  }
})