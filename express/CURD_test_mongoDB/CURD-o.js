/**
 * 操作文件模块
 * 职责： 只处理数据，不关心页面
 */
const fs = require('fs')
const api ={}
const dbPath = './db.json' 

//  1 获取所有学生列表
api.findAll = function(callback){
    fs.readFile(dbPath,'utf8',(err,data)=>{
        if(err){
           return callback(err)
        }
        callback(null,JSON.parse(data).students)
    })
}



// 2 添加保存学生
api.save = function(student,callback){
    fs.readFile(dbPath,'utf8',(err,data)=>{
        if(err){
            return callback(err)
        }

        // 把字符串转换成json 对象
        let students = JSON.parse(data).students
        
        // 处理id 

        student.id = students[students.length - 1].id + 1 

        students.push(student)

        // 把对象转换成字符串 
        let res = JSON.stringify({
            students
        })
        fs.writeFile(dbPath,res,function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}


// save({
//     name:'xxx',
//     age:18
// },(err,data)=>{

// })

// 3 更新学生

api.updateById = function(student,callback){
    // 读取数据并转换
   let students = null
    fs.readFile(dbPath,'utf8',(err,data)=>{
        if(err) return callback(err)
        
        students = JSON.parse(data).students
        
        // 查找id
        // 使用es6 的一个数组方法
        student.id = parseInt(student.id)
        let stu =  students.find(item=>{
            return item.id === student.id  
        })

        // 更新数据
        for( let key in student){
            stu[key] = student[key]
        }

        // 把对象转换成字符串 
        let res = JSON.stringify({
            students
        })
        fs.writeFile(dbPath,res,function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })



}


// updateById({
//     id:1,
//     name:'xx',
//     age:18
// },function(err){

// })

// 4 删除学生

api.del = function(id,callback){
    fs.readFile(dbPath,'utf8',(err,data)=>{
        if(err){
            return callback(err)
        }
        let { students } = JSON.parse(data)
        id = parseInt(id)
        let delIndex = students.findIndex(item=>{
            return item.id === id
        })
        
        students.splice(delIndex,1)
        // console.log(students)
        
        let res = JSON.stringify({
            students
        })
        fs.writeFile(dbPath, res ,err=>{
            if(err){
                return callback(err)
            } 
            else callback(null)
        })
    })

}

// 5、查询学生信息
api.findById = function(id,callback){
    fs.readFile(dbPath,'utf8',(err,data)=>{
        if(err){
            return callback(err)
        }
        let { students } = JSON.parse(data)
        id = parseInt(id)
        let res = students.find(item=>{
            return item.id === id
        })

        callback(null,res)
    })
}

module.exports = api