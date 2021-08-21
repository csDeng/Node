const fs = require('fs');
console.log("异步\r\n");
fs.readFile('./test.txt','utf-8',(err,data)=>{
    if(err){
        console.log("error\r\n==>",err);
    }else{
        console.log(`异步success=>\r\n `,data);
    }
});
console.log("------------the end---------- \r\n");
console.log("同步\r\n");
let data = fs.readFileSync('./test.txt','utf-8');
console.log(`同步success=>\r\n `,data);
console.log("-------同步end-----\r\n");