// require 单次加载

var f1 = require('./03、module');
var f2 = require('./03、module');

f1.setName("小明");
f2.setName("小红花");

f1.sayHell0();
f2.sayHell0();
console.log(f1); 