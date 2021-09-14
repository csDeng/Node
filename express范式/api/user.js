"use strict";
const express = require('express')
const router = express.Router()
const { User } = require('../models/index')
const jwt = require('jsonwebtoken')
const getDay = require('../middlewares/getDay')

router.get('/day', getDay, (req,res)=>{
    res.ok(res.day)
})
// 获取所有用户信息
router.get('/users', async(req,res)=>{
    try {
        const users = await User.find({})
        res.ok( users )
    } catch (error) {
        res.error( error )
    }
    
})

module.exports = router