const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request',(req,res)=>{
    var url = req.url;
    if(url==='/'){
        fs.readFile('./resources/index.html',(err,data)=>{
            if(err){
                res.setHeader("Content-Type","text/plain;charset=utf-8");
                res.end("文件读取失败，请稍后重试");
            }else{
                // data 默认为二进制，可以通过toString
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.end(data);
            }
        })
    }else if(url==='/pic'){
        fs.readFile("./resources/下载.jpg",(error,data)=>{
            // 图片不需要指定编码格式，我们常说的编码格式是针对字符的
            res.setHeader('Content-Type','image/jpeg');
            res.end(data);
        })
    }else{
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.end(`<p>404 NOT FOUND</p>`)
    }


}).listen(3000);
console.log("server is running at =>\r\n 127.0.0.1：3000")