const fs = require('fs');
const {log} = console;

const fd1 = fs.readFile("./test.txt",(err,data)=>{
    if(err) log(err);
    else log(data);
})
log(fd1);
log("加encoding");

fs.readFile("./test.txt","utf-8",(err,data)=>{
    if(err) log(err);
    else log(data);
});

log("---");

var data = fs.readFileSync('test.txt');
console.log("同步读取1: " + data.toString());


fs.writeFile('test.txt', '第二次写入的文件内容！',  function(err,data) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
    log(data)
 });
log("-------------");



 var data = fs.readFileSync('test.txt');
console.log("同步读取2: " + data.toString());

fs.open("./test.txt","w+",(err,data)=>{
    if(err) log(err);
    else log("打开成功"+data);
})
