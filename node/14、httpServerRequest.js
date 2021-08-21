const http = require('http');

const url = require('url');

const util = require('util');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(util.inspect(url.parse(req.url,true)));
}).listen(3000,'127.0.0.1');
console.log("Server is listening at : \r\n => 127.0.0.1:3000");