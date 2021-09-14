const mongoose = require('mongoose')
const md5 = require('blueimp-md5')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique:true
    },
    password: {
        type: String,
        set(val){
            return md5(val)
        }
    },
    level: {
        type: Number,
        default:0   // 0是普通用户，1是管理员
    },
    createTime:{
        type: Date,
        default: Date.now
    },
    updateTime:{
        type: Date,
        default: Date.now
    },
    articleTotal:{  // 文章的总数
        type: Number,
        default: 0
    },
    articleIndex:{  // 新文章的索引id，只增不减
        type:Number,
        default:0
    }
})

const ArticlesSchema = new mongoose.Schema({
    id: {       // 新建的文章的id = 用户表里面的 articleIndex
        type: Number,
        required: true
    },
    uid: {
        type:String, 
        required: true
    },
    title: String,
    author: String,
    body: String,
    date: {
        type:Date,
        default: Date.now
    },
    categories:[String],   // 分类
    comments: [
        {
            body: String,
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    tags:[String],    // 标签
    stars: {
        type:Number,
        default:0
    }
})

const TagsSchema = new mongoose.Schema({
    uid:{
        type: String,
        required: true,
    },
    tags:[String]
})

const CategorySchema = new mongoose.Schema({
    uid:{
        type: String,
        required: true,
    },
    categories:[{
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            default: "当前分类没有描述哦"
        }
    } ]
})

module.exports = { 
    UserSchema,
    ArticlesSchema,
    TagsSchema,
    CategorySchema
}