const http = require('http');

const server = new http.Server();

server.on('request',(req,res)=>{

    console.log("请求-->\r\n" + (req.url));
    // 书写响应头,只能使用一次
    // res.writeHead(200,{'Content-Type':"text/html;charset=utf-8"});
    // res.writeHead(200,{'Content-Type':"text/html"});
    res.setHeader("Content-Type","text/plain;charset=utf-8");
    // write可以使用多次
    // res.write(`<h1>httpServer</h1>`);

    // 浏览器默认自动加/
    // 根据请求的url来响应
    
    if(req.url==='/'){
        res.write("根目录");
    }else if(req.url==='/index'){
        res.write("index");
    }else if(req.url==='/product'){
        var product = [
            {
                name:"apple",
                value:8888
            },
            {
                name:"三星",
                value:553537
            }
        ];
        res.write(JSON.stringify(product))
        // 响应的数据格式只能是二进制数据或者字符串
        // 数组、对象、布尔值都不可以
    }
    else{
        res.write(req.url+`404 Not Found`);
    }

    // 告诉客户端，我的话说完了，你可以呈现给用户了
    res.end();
})

server.listen(3000,'127.0.0.1');

console.log("Http server is listening at => 127.0.0.1:3000");