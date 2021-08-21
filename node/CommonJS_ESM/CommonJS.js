let { counter, add } = require('./count')
console.log(counter)        // 3
add()
console.log(add)            // [Function : add]
console.log(counter)        // 3