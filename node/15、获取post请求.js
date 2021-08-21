const http = require('http');
const querystring = require('querystring');

const util = require('util');

http.createServer((req,res)=>{
    var post = '';

    req.on('data',chunk=>{
        post += chunk;
    });
    req.on('end',function(){
        post = querystring.parse(post);
        res.write(post.title);
        setTimeout(()=>{
            res.write(post.text);
        },1000)
        
        res.end(util.inspect(post));
    })
}).listen(3000);
console.log("Server is listening at 127.0.0.1:3000");