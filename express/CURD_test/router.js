const fs = require('fs')
const express = require('express')

const CRUD = require('./CURD')

const { findAll, save, updateById, findById, del } = CRUD
// 使用Express的api

// 1 创建路由容器
const router = express.Router()
// 2 把路由挂载到路由容器
router
    .get('/', (req, res) => {
        res.send('hello')
    })

    .get('/index', (req, res) => {
        // 第二个参数可选，传进去utf8, 就是告诉编译器把读到的数据以utf8编码
        // fs.readFile('./db.json', 'utf8', (err, data) => {
        //     if (err) {
        //         return res.status(500).send('Server error')
        //     }
        //     else {
        //         res.render('index.html', {
        //             students: JSON.parse(data).students
        //         })
        //         // console.log(JSON.parse(data).students)
        //     }
        // })
        findAll((err,students)=>{
            if(err){
                return res.status(500).send('Server error')
            }
            res.render('index.html', {
               students
            })

        })
    })
    .get('/students/new',(req,res)=>{
        res.render('new.html')
    })

    .post('/students/new',(req,res)=>{
        // res.send(req.body)
        // 1 获取post数据
        // 2 处理数据
        // 3 发送响应
        save(req.body,(err,data)=>{
            if(err){
                res.status(500).send('Error')
            }
            else{
                res.redirect('/index')
            }
        })
    })


    // 渲染编辑学生页面
    .get('/students/edit',(req,res)=>{
        /**
         * 1 获取id 
         * 2 根据id 渲染页面
         */
        let { id } = req.query
        findById(id,(err,data)=>{
            if(err){
                return res.status(500).send('Server Error')
            }
            // console.log(data)
            res.render('edit.html',{
                student:data
            })
        })
       
    })

    // 更新信息
    .post('/students/edit',(req,res)=>{
        console.log(req.body)

        // console.log('更新id',id)

        updateById( req.body ,(err)=>{
            if(err){
                return res.status(500).send('Server Error')
            }
            res.redirect('/index')
        })
    })

    .get('/students/delete',(req,res)=>{
        let { id } = req.query

        del(id,err=>{
            if(err) {
                return res.status(500).send('404')
            }
            
            res.redirect('/index')
        })
    })



// 3 导出
module.exports = router



// 这样也不方便
// module.exports = function(app){
//     app.get('/',(req,res)=>{
//         res.send('hello')
//     })

//     .get('/index',(req,res)=>{
//         // 第二个参数可选，传进去utf8, 就是告诉编译器把读到的数据以utf8编码
//         fs.readFile('./db.json','utf8',(err,data)=>{
//             if(err){
//                 return res.status(500).send('Server error')
//             }
//             else{
//                 res.render('index.html',{
//                     students:JSON.parse(data).student
//                 })
//                 // console.log(JSON.parse(data).student)
//             }
//         })

//     })

// }


