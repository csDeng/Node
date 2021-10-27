'use strict'
const inpuirer = require('inquirer')
const fs = require('fs')
/**
 * 命令行交互，根据用户的操作选择后续的操作
 * 
 */
inpuirer.prompt([
    {
        type:'input',
        name:'name',
        message:'Project name::'
    },
    {
        type:'confirm',
        name:'flag',
        message:'确定创建文件夹吗？'
    }
]).then(ans=>{
    const { name, flag } = ans
    if(!flag){
        return console.log(`用户主动取消创建${name}文件夹`)
    }
    !fs.existsSync(`./${name}`) && fs.mkdirSync(name)
})
