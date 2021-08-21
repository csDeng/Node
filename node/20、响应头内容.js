const http = require('http');

const {log} = console;

const server = http.createServer();

server.on('request',(req,res)=>{
    var url = req.url;

    if(url==='/plain'){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("hello plain ");
    }else if(url==='/html'){
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.end(`<p>html</p><br /><a href="https://www.baidu.com">点我</a>`);
    }else{
        res.end(`404 NOT FOUND`)
    }
}).listen(3000);

log("Server is running at =>\r\n 127.0.0.1:3000");