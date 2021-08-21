const http = require('http');

const app = http.createServer();

app.on('request',(request,response)=>{
    console.log("请求的地址是-->"+ request.url);
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    response.write(`<p>第二个服务端</p>`);

    response.end();
}).listen(5000);
console.log("第二个服务器启动在5000");