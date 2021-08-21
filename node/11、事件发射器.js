const events = require("events");

var emitter = new events.EventEmitter();


const listener1=function(arg1,arg2){
    console.log("listener1",arg1,arg2);
};
const listener2 = function(arg1,arg2){
    // 默认传入this指向当前监听器
    console.log("listener2",arg1,arg2,this);
}
// 注册监听器1 
const em1 = emitter.on('someEvent',listener1);

// console.log(em1);
console.log("----");

// 注册监听器2 
const em2 = emitter.on('someEvent',listener2)
// console.log(em2);
console.log("----");

// 注册事件发射器
emitter.emit('someEvent','触发器',1991,res=>{
    console.log("发射事件1");
});
console.log("发射器1完毕");

// 解除监听器1
emitter.removeListener('someEvent',listener1,res=>{
    console.log("监听器一解除");
});
emitter.emit('someEvent','触发器',1991);

emitter.on('someEvent',(arg1,arg2)=>{
    console.log("listener3",arg1,arg2);
})