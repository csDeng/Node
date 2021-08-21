const template = require ('art-template')
// 这里不是浏览器
// template ( ' script 标签 id' , {对象} )

tplSTR = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> {{title}} </title>
</head>
<body>
  hello {{ name }}
  我喜欢 {{ each hobbies }} {{ $value }} {{ /each}}
</body>
</html>
`
var res = template.render ( tplSTR, {
  name:'Jack',
  hobbies: [
    '唱歌',
    '跳舞',
    '写代码'
  ],
  title: '个人信息'
})

console.log (res)