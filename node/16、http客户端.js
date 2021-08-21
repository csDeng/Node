const http = require('http');
const querystring = require('querystring');

var contents = querystring.stringify({
    name:"byvoid",
    email:"byvoid@byvoid.com",
    address:"SZTU"
});

var options = {
    host:"www.byvoid.com",
    path:"/application/node/post.php",
    method:"POST",
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length':contents.length
    }
};

var req = http.request(options,res=>{
    res.setEncoding('utf-8');
    res.on('data',data=>{
        console.log("res.data------------\r\n");
        console.log(data);
    })
})

req.write(contents);
req.end();