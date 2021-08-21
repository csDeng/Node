const util = require('util');

function Base(){
    this.name = "Base";
    this.base = 1991;

    this.sayHello = ()=>{
        console.log("HELLO "+this.name);
    };

};

Base.prototype.showName = function(){
    console.log(this.name);
};

function Sub(){
    this.name = "SUB";
}
//继承
util.inherits(Sub,Base);

const objBase  = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
console.log("-----------");

const objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub);
console.log('---------');
console.log("使用util.inspect()");
console.log(util.inspect(objBase.name));
// util.inspect()  //把任意对象转换成字符串
console.log(util.inspect(objBase.name,true));


