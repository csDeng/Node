const http = require('http');

// 创建http.Server 的实例
// 第一个参数是请求体参数，第二个参数是响应体参数
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`<h1>node.js</h1>`);
    res.end();
}).listen(8080,'127.0.0.1');
//listen设置的是浏览器访问的ip跟端口
console.log("HTTP server is running \r\n => at 127.0.0.1:8080");