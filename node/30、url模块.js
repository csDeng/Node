const url = require('url')

// let obj = url.parse('http://127.0.0.1:3000/comment?name=周杰伦&description=园游会')
let obj = url.parse('http://127.0.0.1:3000/comment?name=周杰伦&description=园游会',true)

console.log(obj)
console.log(obj.query, '\r\n', obj.pathname)