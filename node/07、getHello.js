
// const Hello = require('./06、覆盖exports.js').Hello;

const Hello = require('./06、覆盖exports.js');

const hello = new Hello();
// hello.;
hello.setName('小白');
hello.sayHello();