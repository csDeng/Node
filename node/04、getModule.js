// const myModule =  require('./03、module');
// // require 不会重复加载模块
// const Module = require('./03-1、module.exports')

// console.log(myModule)
// console.log(Module)
// myModule.setName("小明");
// myModule.sayHell0();  

console.log(exports === module.exports) // true
