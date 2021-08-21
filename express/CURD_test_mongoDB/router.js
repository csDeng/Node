const fs = require('fs')
const express = require('express')

const Student = require('./student')

// 使用Express的api

// 1 创建路由容器
const router = express.Router()
// 2 把路由挂载到路由容器
router
    .get('/', (req, res) => {
        res.redirect('/index')
    })

    .get('/index', function(req, res)  {

        Student.find(function(err,students){
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
        new Student(req.body).save((err)=>{
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

        Student.findById(req.query.id.replace(/"/g,''), function(err,data){
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
        let id = req.body._id.replace(/"/g,'')
        console.log(id)
        let stu = req.body
        stu._id = id
        Student.findByIdAndUpdate( id,req.body ,(err)=>{
            if(err){
                return res.status(500).send('Server Error')
            }
            res.redirect('/index')
        })
    })

    .get('/students/delete',(req,res)=>{
        let  id  = req.query.id.replace(/"/g,'')
        Student.findByIdAndRemove(id,err=>{
            if(err) {
                return res.status(500).send('404')
            }
            
        res.redirect('/index')
        })
    })
    .get('/search', (req,res)=>{
        res.render('search.html')
    })

    .post('/search', (req,res)=>{
        // res.send(req.body)
        let {name} = req.body
        Student.find({
            name
        },(err,student)=>{
            if(err){
                return  res.status(500).send('没有查询到')
            }
            console.log('=====\r\n',student)
            res.render('search.html',{
                student
            })
        })
    })



// 3 导出
module.exports = router
