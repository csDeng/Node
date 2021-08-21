const { Module } = require("module");

function Hello(){
    var name;
    this.setName=(n)=>{
        name=n;
    }
    this.sayHello=()=>{
        console.log("Hello" + name);
    }
};

//  * 导出方式
//  exports 本身仅仅是一个空对象，专门用来声明接口
// exports.Hello = Hello;
// 导入模块的时候，需要 const Hello = require('./06、覆盖exports.js').Hello;

module.exports = Hello;
// 导入的时候 需要const Hello = require('./06、覆盖exports.js');